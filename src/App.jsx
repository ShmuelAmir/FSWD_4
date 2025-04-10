import React, { useState } from "react";

import EditorArea from "./components/EditorArea";
import DisplayArea from "./components/DisplayArea";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <main>
      <DisplayArea text={text} />
      <EditorArea setText={setText} />
    </main>
  );
}

export default App;
