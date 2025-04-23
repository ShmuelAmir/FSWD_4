function File({ text, styles, matches, active, handleActive }) {
  const getStyleWithHighlight = (
    baseStyle,
    startIndex,
    endIndex,
    textSlice
  ) => {
    if (!matches?.length) {
      return [
        {
          key: `${startIndex}#${endIndex}`,
          style: baseStyle,
          text: textSlice,
        },
      ];
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
          spans.push({
            key: `before-${match.start}`,
            style: baseStyle,
            text: textSlice.slice(currentIndex, match.start - startIndex),
          });
        }

        // in the range
        const matchStartInSlice = Math.max(0, match.start - startIndex);
        const matchEndInSlice = Math.min(sliceLength, match.end - startIndex);

        if (matchStartInSlice < matchEndInSlice) {
          spans.push({
            key: `match-${match.start}`,
            style: { ...baseStyle, backgroundColor: "yellow" },
            text: textSlice.slice(matchStartInSlice, matchEndInSlice),
          });
        }

        currentIndex = matchEndInSlice;
      }
    });

    // after
    if (currentIndex < sliceLength) {
      spans.push({
        key: `after-${currentIndex}`,
        style: baseStyle,
        text: textSlice.slice(currentIndex),
      });
    }

    return spans;
  };

  return (
    <div
      className={`paper ${active ? "active-file" : ""}`}
      onClick={handleActive}
    >
      {styles.map(({ startIndex, endIndex, style }, index) => {
        let actualEndIndex = endIndex || text.length;
        if (styles[index + 1]) actualEndIndex = styles[index + 1]?.startIndex;
        const textSlice = text.slice(startIndex, actualEndIndex);

        const styleParts = getStyleWithHighlight(
          style,
          startIndex,
          actualEndIndex,
          textSlice
        );

        return styleParts.map((part) => (
          <span key={part.key} style={part.style}>
            {part.text}
          </span>
        ));
      })}
    </div>
  );
}

export default File;
