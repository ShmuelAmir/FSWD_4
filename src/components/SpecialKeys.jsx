import { LANGUAGES, FONTS, FONT_COLORS, FONT_SIZES } from "../consts";

function SpecialKeys({ lang, setLang }) {
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
      <div className="color-group">
        {FONT_COLORS.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SpecialKeys;
