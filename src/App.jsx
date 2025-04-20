import React, { useState } from "react";

import EditorArea from "./components/EditorArea";
import DisplayArea from "./components/DisplayArea";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [styles, setStyles] = useState([{ startIndex: 0, style: {} }]);

  return (
    <main>
      <DisplayArea text={text} styles={styles} />
      <EditorArea
        text={text}
        textPosition={text.length}
        setText={setText}
        setStyles={setStyles}
      />
    </main>
  );
}

export default App;
