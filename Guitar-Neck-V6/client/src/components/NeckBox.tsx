// src/components/NeckBox.tsx

import StringBox from "./StringBox.js";
import { useTab } from "./TabContext.js";

function NeckBox() {
  const { activeIndexes, setActiveIndexes } = useTab();

  const updateString = (stringIndex: number, fretIndex: number) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[stringIndex] = fretIndex;
    setActiveIndexes(newActiveIndexes);
  };

  return (
    <div className="neckBox">
      {activeIndexes.map((activeIndex, stringIndex) => (
        <StringBox
          key={stringIndex}
          stringIndex={stringIndex}
          activeIndex={activeIndex}
          updateString={updateString}
        />
      ))}
    </div>
  );
}

export default NeckBox;
