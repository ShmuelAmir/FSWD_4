import React, { useState } from "react";

import EditorArea from "./components/EditorArea";
import DisplayArea from "./components/DisplayArea";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [styles, setStyles] = useState([{ startIndex: 0, style: {} }]);
  const [route, setRoute] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <main>
    {
    route === "login" ? <LogIn setRoute={setRoute} setUser={setUser} /> :
    route === "signup" ? <SignUp setRoute={setRoute} /> :
    route === "editor" ? (
      <>
        <DisplayArea text={text} styles={styles} />
        <EditorArea text={text} setText={setText} styles={styles} setStyles={setStyles} setRoute={setRoute} user={user} setUser={setUser} />
      </>
    ) : null
    }
    </main>
  );
}

export default App;