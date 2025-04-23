import { useState } from "react";

import DisplayArea from "../components/DisplayArea";
import EditorArea from "../components/EditorArea";
import Topbar from "../components/Topbar";

function EditorPage({ user, setUser, setRoute }) {
  const [text, setText] = useState([""]);
  const [styles, setStyles] = useState([[{ startIndex: 0, style: {} }]]);
  const [matches, setMatches] = useState([[]]);
  const [activeFile, setActiveFile] = useState(0);

  const setActiveState = (stateSetter, updater) => {
    stateSetter((prev) => {
      const newState = [...prev];
      newState[activeFile] =
        typeof updater === "function" ? updater(prev[activeFile]) : updater;
      return newState;
    });
  };

  const addFile = () => {
    if (text.length < 3) {
      setText((p) => [...p, ""]);
      setStyles((p) => [...p, [{ startIndex: 0, style: {} }]]);
      setMatches((p) => [...p, []]);
      setActiveFile(text.length);
    } else {
      alert("you have enough files 😉");
    }
  };

  const handleSaveAs = (key, text, styles) => {
    const storedData = JSON.parse(localStorage.getItem(user));
    const userFiles = storedData ? storedData.userFiles : null;
    const newFile = { text, styles };
    userFiles.push({ key, newFile });
    const userData = { ...storedData, userFiles };
    localStorage.setItem(user, JSON.stringify(userData));
  };

  const closeFile = () => {
    if (text.length > 1) {
      if (text[activeFile].length > 0) {
        const filename = prompt("do you want to save?\nEnter file name:");
        if (filename === null) return;
        if (filename !== "") {
          handleSaveAs(filename, text[activeFile], styles[activeFile]);
        }
      }
      setText((p) => p.filter((_, i) => i !== activeFile));
      setStyles((p) => p.filter((_, i) => i !== activeFile));
      setMatches((p) => p.filter((_, i) => i !== activeFile));

      setActiveFile(text.length - 2);
    } else {
      alert("you can't close the last file.");
    }
  };

  return (
    <>
      <DisplayArea
        text={text}
        styles={styles}
        matches={matches}
        activeFile={activeFile}
        setActive={setActiveFile}
      />

      <Topbar addFile={addFile} closeFile={closeFile} />

      <EditorArea
        user={user}
        setUser={setUser}
        text={text[activeFile]}
        setRoute={setRoute}
        setText={(updater) => setActiveState(setText, updater)}
        styles={styles[activeFile]}
        setStyles={(updater) => setActiveState(setStyles, updater)}
        setMatches={(updater) => setActiveState(setMatches, updater)}
        handleSaveAs={handleSaveAs}
      />
    </>
  );
}

export default EditorPage;
