import { LANGUAGES } from "../consts";

function SpecialKeys({ lang, setLang }) {
  return (
    <div>
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
    </div>
  );
}

export default SpecialKeys;
