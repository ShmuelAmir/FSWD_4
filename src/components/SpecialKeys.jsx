import { LANGUAGES, FONTS, FONT_COLORS, FONT_SIZES } from "../consts";

import deleteLast from "../assets/delete-last.svg";
import deleteWord from "../assets/delete-word.svg";
import deleteAll from "../assets/delete-all.svg";

function SpecialKeys({ lang, setLang, handleSpecialKeyClick }) {
  return (
    <div className="special-keys">
      <div className="button-group">
        {LANGUAGES.map((language) => (
          <button
            key={language}
            className={lang === language ? "active" : ""}
            onClick={() => setLang(language)}
          >
            {language}
          </button>
        ))}
      </div>
      <select>
        {FONTS.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
      <select>
        {FONT_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <div className="group">
        {FONT_COLORS.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="group">
        {["delete-last", "delete-word", "delete-all"].map((key) => (
          <button
            key={key}
            className="icon"
            onClick={() => handleSpecialKeyClick(key)}
            title={key.replace("-", " ")}
          >
            <img
              src={
                key === "delete-last"
                  ? deleteLast
                  : key === "delete-word"
                  ? deleteWord
                  : deleteAll
              }
              alt={key.replace("-", " ") + " icon"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SpecialKeys;
