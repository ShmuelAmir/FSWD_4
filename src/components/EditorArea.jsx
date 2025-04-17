import { useState } from "react";

import Keyboard from "./Keyboard";
import SpecialKeys from "./SpecialKeys";

function EditorArea({ setText }) {
  const [lang, setLang] = useState("he");

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
      case "Shift":
      case "Ctrl":
      case "Alt":
      case "CapsLock":
      case "Tab":
        // TODO: implement these keys
        break;
      default:
        setText((prev) => prev + key);
    }
  };

  const handleSpecialKeyClick = (key) => {
    switch (key) {
      case "delete-last":
        setText((prev) => prev.slice(0, -1));
        break;
      case "delete-word":
        setText((prev) => {
          const lastSpaceIndex = Math.max(
            prev.lastIndexOf(" "),
            prev.lastIndexOf("\n")
          );
          return prev.slice(0, lastSpaceIndex);
        });
        break;
      case "delete-all":
        setText("");
        break;
    }
  };

  return (
    <div className="area">
      <SpecialKeys
        lang={lang}
        setLang={setLang}
        handleSpecialKeyClick={handleSpecialKeyClick}
      />
      <Keyboard handleClick={handleClick} lang={lang} />
    </div>
  );
}

export default EditorArea;
