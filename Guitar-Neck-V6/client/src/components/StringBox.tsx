// src/components/StringBox.tsx

type StringBoxProps = {
  stringIndex: number;
  activeIndex: number;
  updateString: (stringIndex: number, fretIndex: number) => void;
};

function StringBox({ stringIndex, activeIndex, updateString }: StringBoxProps) {
  const positions = Array.from({ length: 25 }, (_, index) => index);
  const stringNotes = [":e", ":B", ":G", ":D", ":A", ":E"]; // From highest to lowest string

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      updateString(stringIndex, -1);
    } else {
      updateString(stringIndex, index);
    }
  };

  return (
    <div className="stringBox">
      <span className="string-label">{stringNotes[stringIndex]}</span>
      {positions.map((index) => (
        <button
          key={index}
          className={`stringPosition ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {activeIndex === index && <div className="fret-marker">{index}</div>}
        </button>
      ))}
    </div>
  );
}

export default StringBox;
