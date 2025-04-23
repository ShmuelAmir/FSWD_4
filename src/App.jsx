import React, { useState } from "react";

import EditorArea from "./components/EditorArea";
import DisplayArea from "./components/DisplayArea";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [styles, setStyles] = useState([{ startIndex: 0, style: {} }]);
  const [matches, setMatches] = useState([]);

  return (
    <main>
      <DisplayArea text={text} styles={styles} matches={matches} />
      <EditorArea
        text={text}
        setText={setText}
        setStyles={setStyles}
        setMatches={setMatches}
      />
    </main>
  );
}

export default App;
