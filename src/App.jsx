import { useState } from "react";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import EditorPage from "./pages/EditorPage";
import "./App.css";

function App() {
  const [route, setRoute] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <main>
      {route === "login" ? (
        <LogIn setRoute={setRoute} setUser={setUser} />
      ) : route === "signup" ? (
        <SignUp setRoute={setRoute} />
      ) : route === "editor" ? (
        <EditorPage user={user} setUser={setUser} />
      ) : null}
    </main>
  );
}

export default App;
