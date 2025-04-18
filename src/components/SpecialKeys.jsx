import { LANGUAGES, FONTS, FONT_COLORS, FONT_SIZES } from "../consts";

import DeleteLast from "../assets/delete-last.tsx";
import DeleteWord from "../assets/delete-word.tsx";
import DeleteAll from "../assets/delete-all.tsx";
import Undo from "../assets/undo.tsx";

function SpecialKeys({ lang, setLang, handleSpecialKeyClick }) {
  return (
    <div className="special-keys">
      <div className="group">
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
      <div className="seperator" />

      <div className="group">
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
      </div>
      <div className="seperator" />

      <div className="group">
        {FONT_COLORS.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="seperator" />

      <div className="group">
        {["delete-last", "delete-word", "delete-all"].map((key) => (
          <button
            key={key}
            onClick={() => handleSpecialKeyClick(key)}
            title={key.replace("-", " ")}
          >
            {key === "delete-last" ? (
              <DeleteLast />
            ) : key === "delete-word" ? (
              <DeleteWord />
            ) : (
              <DeleteAll />
            )}
          </button>
        ))}
      </div>
      <div className="seperator" />

      <div className="group">
        <button>
          <Undo />
        </button>
        <input type="text" placeholder="Replace" />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default SpecialKeys;
