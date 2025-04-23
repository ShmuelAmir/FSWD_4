function DisplayArea({ text, styles, matches }) {
  const getStyleWithHighlight = (
    baseStyle,
    startIndex,
    endIndex,
    textSlice
  ) => {
    if (!matches?.length) {
      return (
        <span key={`${startIndex}#${endIndex}`} style={baseStyle}>
          {textSlice}
        </span>
      );
    }

    const spans = [];
    let currentIndex = 0;
    const sliceLength = textSlice.length;

    matches.forEach((match) => {
      const matchStartsInRange =
        match.start >= startIndex && match.start < endIndex;
      const matchEndsInRange = match.end > startIndex && match.end <= endIndex;

      if (matchStartsInRange || matchEndsInRange) {
        // before match
        if (currentIndex < match.start - startIndex) {
          spans.push(
            <span key={`before-${match.start}`} style={baseStyle}>
              {textSlice.slice(currentIndex, match.start - startIndex)}
            </span>
          );
        }

        // in the range
        const matchStartInSlice = Math.max(0, match.start - startIndex);
        const matchEndInSlice = Math.min(sliceLength, match.end - startIndex);

        if (matchStartInSlice < matchEndInSlice) {
          spans.push(
            <span
              key={`match-${match.start}`}
              style={{ ...baseStyle, backgroundColor: "yellow" }}
            >
              {textSlice.slice(matchStartInSlice, matchEndInSlice)}
            </span>
          );
        }

        currentIndex = matchEndInSlice;
      }
    });

    // after
    if (currentIndex < sliceLength) {
      spans.push(
        <span key={`after-${currentIndex}`} style={baseStyle}>
          {textSlice.slice(currentIndex)}
        </span>
      );
    }

    return <span key={startIndex}>{spans}</span>;
  };

  return (
    <div className="area">
      <div className="display-area">
        {styles.map(({ startIndex, endIndex, style }, index) => {
          let actualEndIndex = endIndex || text.length;
          if (styles[index + 1]) actualEndIndex = styles[index + 1]?.startIndex;
          const textSlice = text.slice(startIndex, actualEndIndex);

          return getStyleWithHighlight(
            style,
            startIndex,
            actualEndIndex,
            textSlice
          );
        })}
      </div>
    </div>
  );
}

export default DisplayArea;
