import React, { useState } from "react";
import ThreeDotsIcon from "../assets/three-dots.jsx";

function Topbar({ addFile, closeFile }) {
  const [show, setShow] = useState(false);

  return (
    <div className="topbar">
      <div className="trigger" onClick={() => setShow((p) => !p)}>
        <ThreeDotsIcon />
      </div>
      {show && (
        <div className="popup">
          <div onClick={addFile}>New</div>
          <div onClick={closeFile}>Close</div>
        </div>
      )}
    </div>
  );
}

export default Topbar;
