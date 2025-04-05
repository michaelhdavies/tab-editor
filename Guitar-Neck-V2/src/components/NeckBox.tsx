// src/components/NeckBox.tsx

import StringBox from './StringBox.js';
import { useTab } from './TabContext.js';

function NeckBox() {
  const { activeIndexes, setActiveIndexes } = useTab();

  const updateString = (stringIndex: number, fretIndex: number) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[stringIndex] = fretIndex;
    setActiveIndexes(newActiveIndexes);
  };

  return (
    <>
      {activeIndexes.reverse().map((fretIndex, stringIndex) => (
        <StringBox
          key={stringIndex}
          stringIndex={stringIndex}
          activeIndex={fretIndex}
          updateString={updateString}
        />
      ))}
    </>
  );
}

export default NeckBox;
