import { KEYBOARD_LAYOUT_ROWS } from "../consts";
import KeyboardKey from "./KeyboardKey";

function Keyboard({ lang, handleClick }) {
  return (
    <div className="keyboard">
      {KEYBOARD_LAYOUT_ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key, j) => (
            <KeyboardKey
              key={j}
              langKey={key[lang]}
              handleClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
