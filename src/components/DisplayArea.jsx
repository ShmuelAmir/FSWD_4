import File from "./File";

function DisplayArea({ text, styles, matches, activeFile, setActive }) {
  return (
    <div className="area">
      <div className="display-area">
        {text.map((_, index) => (
          <File
            key={index}
            text={text[index]}
            styles={styles[index]}
            matches={matches[index]}
            active={index === activeFile}
            handleActive={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayArea;
