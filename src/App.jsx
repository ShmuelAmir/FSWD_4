// src/App.jsx
import './App.css';
import React from 'react';
import EditorArea from './components/EditorArea';
import DisplayArea from './components/DisplayArea';

function App() {
  return (
    <div>
      <DisplayArea />
      <EditorArea />
    </div>
  );
}

export default App;