import { useState } from "react";

import Keyboard from "./Keyboard";
import SpecialKeys from "./SpecialKeys";

function EditorArea({ text, setText, styles, setStyles,  }) {
  const [lang, setLang] = useState("EN");
  const [editAll, setEditAll] = useState(true);

  const handleClick = (key) => {
    switch (key) {
      case "Backspace":
        setText((prev) => prev.slice(0, -1));
        break;
      case "Enter":
        setText((prev) => prev + "\n");
        break;
      case "Space":
        setText((prev) => prev + " ");
        break;
      default:
        setText((prev) => prev + key);
    }
  };

  const handleDeleteKeyClick = (key) => {
    let len = text.length;

    setText((prev) => {
      if (key === "delete-last") {
        len = len - 1;
        return prev.slice(0, -1);
      } else if (key === "delete-word") {
        const lastSpaceIndex = Math.max(
          prev.lastIndexOf(" "),
          prev.lastIndexOf("\n")
        );
        len = lastSpaceIndex === -1 ? 0 : lastSpaceIndex;
        if (lastSpaceIndex === -1) return "";
        return prev.slice(0, lastSpaceIndex);
      } else if (key === "delete-all") {
        len = 0;
        return "";
      }
      return prev;
    });

    setStyles((prev) => prev.filter((s) => s.startIndex <= len));
  };

  const handleStyleChange = (key, value) => {
    const index = editAll ? 0 : text.length;

    setStyles((prev) => {
      const newStyles = [...prev];

      const existingStyleIndex = newStyles.findIndex(
        (s) => s.startIndex === index
      );

      if (existingStyleIndex !== -1) {
        newStyles[existingStyleIndex] = {
          startIndex: existingStyleIndex,
          style: { ...newStyles[existingStyleIndex].style, [key]: value },
        };
      } else {
        newStyles.push({
          startIndex: index,
          style: { ...newStyles.at(-1).style, [key]: value },
        });
      }

      return newStyles;
    });
  };

  const handleSearch = (search) => {
    // TODO: implement search functionality
  };

  const handleReplace = (search, replace) => {
    // TODO: implement replace functionality
  };

  //je veux sauvegarder le texte affiché tel qu'il est jusqu'à présent dans le local storage avec son style
//je veux la fonction recoive le texte et le style en paramètre et le nom de la clé dans le local storage
//je veux que la fonction sauvegarde le texte et le style dans le local storage avec la clé donnée
const handleSaveAs = (key) => {
  const data = { text, styles };
  localStorage.setItem(key, JSON.stringify(data));
}

//je veux que la fonction récupère le texte et le style du local storage avec la clé donnée

const handleOpen = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (data) {
    setText(data.text);
    setStyles(data.styles);
  } else {
    console.log("No data found for the given key.");
  }
};


  return (
    <div className="area">
      <SpecialKeys
        lang={lang}
        setLang={setLang}
        handleDeleteKeyClick={handleDeleteKeyClick}
        handleStyleChange={handleStyleChange}
        setEditAll={setEditAll}
        editAll={editAll}
        handleSearch={handleSearch}
        handleReplace={handleReplace}
        handleSave={handleSaveAs}
        handleOpen={handleOpen}
      />
      <Keyboard handleClick={handleClick} lang={lang} />
    </div>
  );
}

export default EditorArea;
