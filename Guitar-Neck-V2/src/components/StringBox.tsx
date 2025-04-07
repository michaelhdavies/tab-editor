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
    <div className="string">
      {positions.map((index) => (
        <button
          key={index}
          className={`fret-position ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {activeIndex === index && (
            <span className="fret-marker">{activeIndex}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default StringBox;
