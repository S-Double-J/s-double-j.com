interface TextSplitterProps {
  text: string;
  containerWidth: number;
  hiddenRef: React.RefObject<HTMLDivElement>;
}

function textSplitter({ text, containerWidth, hiddenRef }: TextSplitterProps): string[] {
  const words = text.split(" ");
  const tempLines: string[] = [];
  let currentLine = "";
  console.log("max width:", containerWidth)
  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (hiddenRef.current) {
      hiddenRef.current.innerText = testLine;
      console.log("test line:", testLine)
      console.log("test width:", hiddenRef.current.scrollWidth)
      if (hiddenRef.current.scrollWidth > containerWidth) {
        tempLines.push(currentLine);
        currentLine = ` ${word}`;
      } else {
        currentLine = testLine;
      }
    }
  });

  if (currentLine) {
    tempLines.push(currentLine);
  }

  return tempLines;
}

export default textSplitter;
