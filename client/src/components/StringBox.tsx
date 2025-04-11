// src/components/StringBox.tsx

type StringBoxProps = {
  stringIndex: number;
  activeIndex: number;
  updateString: (stringIndex: number, fretIndex: number) => void;
};

function StringBox({ stringIndex, activeIndex, updateString }: StringBoxProps) {
  const positions = Array.from({ length: 25 }, (_, index) => index);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      updateString(stringIndex, -1);
    } else {
      updateString(stringIndex, index);
    }
  };

  return (
    <div className="stringBox">
      {positions.map((index) => (
        <button
          key={index}
          className="stringPosition"
          onClick={() => handleClick(index)}
        >
          {activeIndex === index && (
            <span className="noteDot">{'\u2B24'}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default StringBox;
