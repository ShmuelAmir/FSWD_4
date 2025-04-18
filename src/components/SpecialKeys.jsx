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

      <div className="group gap-lg grow">
        <select
          onChange={(e) => handleSpecialKeyClick("font-family", e.target.value)}
        >
          {FONTS.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <select
          className="grow"
          onChange={(e) => handleSpecialKeyClick("font-size", e.target.value)}
        >
          {FONT_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <select
          className="grow"
          onChange={(e) => handleSpecialKeyClick("font-color", e.target.value)}
        >
          {FONT_COLORS.map((color) => (
            <option key={color.name} value={color.hash}>
              {color.name}
            </option>
          ))}
        </select>
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
        <button title="undo">
          <Undo />
        </button>
      </div>
      <div className="seperator" />

      <div className="group gap-lg">
        <input type="text" placeholder="Search..." />
        <input type="text" placeholder="Replace" />
      </div>
    </div>
  );
}

export default SpecialKeys;
