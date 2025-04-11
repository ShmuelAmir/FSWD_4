function KeyboardKey({ langKey, handleClick }) {
  return (
    <button
      className="key"
      onClick={() => handleClick(langKey)}
      style={langKey === "Space" ? { width: "40rem" } : {}}
    >
      {langKey}
    </button>
  );
}

export default KeyboardKey;
