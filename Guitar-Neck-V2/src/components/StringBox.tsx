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
    updateString(stringIndex, 0);
  } else {
    updateString(stringIndex, index);
  }
};

  return (
    <div className="stringBox">
      {positions.map((index) => (
        <button
          key={index}
          className={`stringPosition ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {activeIndex === index && `\u2B24 ${activeIndex}`}
        </button>
      ))}
    </div>
  );
}

export default StringBox;
