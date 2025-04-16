function KeyboardKey({ langKey, handleClick }) {
  return (
    <button
      className="key"
      onClick={() => handleClick(langKey)}
      style={langKey === "Space" ? { paddingInline: "15em" } : {}}
    >
      {langKey}
    </button>
  );
}

export default KeyboardKey;
