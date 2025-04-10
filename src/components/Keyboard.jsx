import { KEYBOARD_LAYOUT_ROWS } from "../consts";

function Keyboard({ handleClick, lang }) {
  return (
    <div className="keyboard">
      {KEYBOARD_LAYOUT_ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((key, i) => (
            <button
              key={key[lang] + i.toString()}
              className="key"
              onClick={() => handleClick(key[lang])}
            >
              {key[lang]}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
