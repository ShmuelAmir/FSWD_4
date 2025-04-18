function DisplayArea({ text, style }) {
  return (
    <div className="area">
      <div
        className="display-area"
        style={style}
        // dangerouslySetInnerHTML={{ __html: text }}
      >
        {text}
      </div>
    </div>
  );
}

export default DisplayArea;
