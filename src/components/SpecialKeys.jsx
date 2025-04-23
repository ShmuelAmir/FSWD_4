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
  handleSaveAs,
  handleOpen
}) {
  const [saveName, setSaveName] = useState("");
  const [openKey, setOpenKey] = useState("");
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
          onChange={(e) => handleSearch(e.target.value)}
        />
        <input type="text" placeholder="Replace" onClick={handleReplace} />
      </div>
      <div className="seperator" />

      <div className="group gap-lg">
        <div className="save-container">
          <input
            type="text"
            placeholder="Save as..."
            id="saveName"
            value={saveName}
            onChange={(e) => setSaveName(e.target.value)}
          />
          <button
            onClick={() => {
              
              if (saveName) {
                setSaveName("");
                handleSaveAs(saveName);
              } else {
                alert("Please provide a name to save.");
              }
            }}
          >
            OK
          </button>
        </div>
        <div className="open-container">
          <input
            type="text"
            placeholder="Enter file name..."
            id="openKey"
            value={openKey}
            onChange={(e) => setOpenKey(e.target.value)}
          />
          <button
            onClick={() => {
              if (openKey) {
               setOpenKey("");
                handleOpen(openKey);
              } else {
                alert("Please provide a name of file saved to open.");
              }
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialKeys;
