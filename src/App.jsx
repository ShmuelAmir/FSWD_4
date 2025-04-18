import React, { useState } from "react";

import EditorArea from "./components/EditorArea";
import DisplayArea from "./components/DisplayArea";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState();

  return (
    <main>
      <DisplayArea text={text} style={style} />
      <EditorArea setText={setText} setStyle={setStyle} />
    </main>
  );
}

export default App;
