import { LANGUAGES, FONT_ACTIONS, DELETE_ACTIONS } from "../consts";
import Undo from "../assets/undo.tsx";
import { useState } from "react";

function SpecialKeys({
  lang,
  setLang,
  handleDeleteKeyClick,
  handleStyleChange,
  setEditAll,
  editAll,
  handleSearch,
  handleReplace,
}) {
  const [search, setSearch] = useState("");
  const [replace, setReplace] = useState("");

  const handleUndoClick = () => {
    // TODO: implement undo functionality
  };

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
        <button
          className={editAll ? "active" : ""}
          onClick={() => setEditAll((p) => !p)}
        >
          All
        </button>
        {/* TODO: sync with current style with useState */}
        {FONT_ACTIONS.map(({ key, values }) => (
          <select
            key={key}
            className="grow"
            onChange={(e) => handleStyleChange(key, e.target.value)}
          >
            {values.map((value) => {
              if (typeof value === "object") {
                return (
                  <option key={value.name} value={value.hash}>
                    {value.name}
                  </option>
                );
              }
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        ))}
      </div>
      <div className="seperator" />

      <div className="group">
        {DELETE_ACTIONS.map(({ key, name, icon: Icon }) => (
          <button
            key={key}
            onClick={() => handleDeleteKeyClick(key)}
            title={name}
          >
            {Icon ? <Icon /> : name}
          </button>
        ))}
        <button title="undo" onClick={handleUndoClick}>
          <Undo />
        </button>
      </div>
      <div className="seperator" />

      <div className="group gap-lg">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Replace"
          value={replace}
          onChange={(e) => setReplace(e.target.value)}
        />
        <button onClick={() => handleReplace(search, replace)}>OK</button>
      </div>
    </div>
  );
}

export default SpecialKeys;
