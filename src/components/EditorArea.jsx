import { useState } from "react";

import Keyboard from "./Keyboard";
import SpecialKeys from "./SpecialKeys";

function EditorArea({
  text,
  setText,
  styles,
  setStyles,
  setRoute,
  user,
  setUser,
  setMatches,
}) {
  const [lang, setLang] = useState("EN");
  const [editAll, setEditAll] = useState(true);
  const [styleStack, setStyleStack] = useState([]);

  const handleClick = (key) => {
    switch (key) {
      case "Backspace":
        handleDeleteKeyClick("delete-last");
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
    if (editAll) {
      setStyles((prev) => {
        setStyleStack((p) => [...p, prev]);
        return prev.map((s) => ({
          ...s,
          style: {
            ...s.style,
            [key]: value,
          },
        }));
      });
    } else {
      setStyles((prev) => {
        setStyleStack((p) => [...p, prev]);

        const newStyles = [...prev];
        const index = text.length;

        const existingStyleIndex = newStyles.findIndex(
          (s) => s.startIndex === index
        );

        if (existingStyleIndex !== -1) {
          newStyles[existingStyleIndex] = {
            startIndex: existingStyleIndex,
            style: { ...newStyles[existingStyleIndex].style, [key]: value },
          };
        } else {
          if (newStyles.length > 1) {
            newStyles.at(-1).endIndex = index;
          }
          newStyles.push({
            startIndex: index,
            style: { ...newStyles.at(-1).style, [key]: value },
          });
        }

        return newStyles;
      });
    }
  };

  const handleSearch = (search) => {
    if (!search) {
      setMatches([]);
    } else {
      const searchRegex = new RegExp(search, "gi");
      const matches = [...text.matchAll(searchRegex)];

      setMatches(
        matches.map((m) => ({ start: m.index, end: m.index + search.length }))
      );
    }
  };

  const handleReplace = (search, replace) => {
    const searchRegex = new RegExp(search, "gi");
    setText(text.replace(searchRegex, replace));
    setMatches([]);
  };

  const handleSaveAs = (key) => {
    const storedData = JSON.parse(localStorage.getItem(user));
    const userFiles = storedData ? storedData.userFiles : null;
    const newFile = { text, styles };
    userFiles.push({ key, newFile });
    const userData = { ...storedData, userFiles };
    localStorage.setItem(user, JSON.stringify(userData));
  };

  const handleOpen = (key) => {
    const storedData = JSON.parse(localStorage.getItem(user));
    const userFiles = storedData ? storedData.userFiles : null;
    const fileData = userFiles.find((file) => file.key === key);
    if (fileData) {
      const { text, styles } = fileData.newFile;
      setText(text);
      setStyles(styles);
    } else {
      console.log("File not found for the given key.");
    }
  };

  const handleUndoClick = () => {
    if (styleStack.length > 1) {
      setStyleStack((prev) => prev.slice(0, prev.length - 1));
      setStyles(styleStack.at(-2));
    }
  };

  return (
    <div className="paper area">
      <SpecialKeys
        lang={lang}
        setLang={setLang}
        handleDeleteKeyClick={handleDeleteKeyClick}
        handleStyleChange={handleStyleChange}
        setEditAll={setEditAll}
        editAll={editAll}
        handleSearch={handleSearch}
        handleReplace={handleReplace}
        handleSaveAs={handleSaveAs}
        handleOpen={handleOpen}
        handleUndoClick={handleUndoClick}
      />
      <Keyboard handleClick={handleClick} lang={lang} />
      <button
        className="logout-button"
        onClick={() => {
          setRoute("login");
          setUser(null);
          setText("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default EditorArea;
