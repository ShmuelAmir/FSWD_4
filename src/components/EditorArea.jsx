import { useState } from "react";

import Keyboard from "./Keyboard";
import SpecialKeys from "./SpecialKeys";

function EditorArea({ text, setText, styles, setStyles, setRoute, user, setUser }) {
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

  //The handleSaveAS function saves the provided text and its associated style into the browser's local storage using a specified key.
  const handleSaveAs = (key) => {
    const storedData = JSON.parse(localStorage.getItem(user));
    const userFiles = storedData ? storedData.userFiles : null;
    const newFile = { text, styles };
    userFiles.push({key,newFile}); // Add the new file to the user's files array
    const userData = { ...storedData, userFiles }; // Create a new object with the updated files array
    localStorage.setItem(user, JSON.stringify(userData)); // Save the updated user data back to local storage
  };

  // The handleOpen function retrieves the text and styles associated with a given key from local storage and updates the state variables accordingly.
  // If no data is found for the given key, it logs a message to the console.
  const handleOpen = (key) => {
    const storedData = JSON.parse(localStorage.getItem(user));
    const userFiles = storedData ? storedData.userFiles : null;
    const fileData = userFiles.find((file) => file.key === key);
    if (fileData) {
      const { text, styles } = fileData.newFile;
      setText(text);
      setStyles(styles);
    }
    else{
      console.log("File not found for the given key.");
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
        handleSaveAs={handleSaveAs}
        handleOpen={handleOpen}
      />
      <Keyboard handleClick={handleClick} lang={lang} />
      <button className="logout-button" onClick={() => {setRoute("login"); setUser(null); setText("")}}>Log Out</button>
    </div>
  );
}

export default EditorArea;
