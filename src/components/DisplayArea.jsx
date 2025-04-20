function DisplayArea({ text, styles }) {
  return (
    <div className="area">
      <div className="display-area">
        {styles.map(({ startIndex, style }, index) => {
          const nextStartIndex = styles[index + 1]?.startIndex || text.length;
          const textSlice = text.slice(startIndex, nextStartIndex);

          return (
            <span key={index} style={style}>
              {textSlice}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayArea;
