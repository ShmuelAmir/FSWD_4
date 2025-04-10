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

  return (
    <div className="area">
      <SpecialKeys lang={lang} setLang={setLang} />
      <Keyboard handleClick={handleClick} lang={lang} />
    </div>
  );
}

export default EditorArea;
