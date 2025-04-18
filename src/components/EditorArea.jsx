import { useState } from "react";

import Keyboard from "./Keyboard";
import SpecialKeys from "./SpecialKeys";

function EditorArea({ setText, setStyle }) {
  const [lang, setLang] = useState("EN");

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

  const handleSpecialKeyClick = (key, value) => {
    switch (key) {
      // delete
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
      // style
      case "font-size":
        setStyle({ fontSize: value });
        break;
      case "font-family":
        setStyle({ fontFamily: value });
        break;
      case "font-color":
        setStyle({ color: value });
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
