// src/Tabs.tsx

import { useTab } from './TabContext.js';
function Tabs() {
  const { activeIndexes } = useTab();
  const strings = ['e', 'B', 'G', 'D', 'A', 'E'];

  const hasDoubleDigits = activeIndexes.some((fret) => fret >= 10);

  const formatFret = (fret: number): string => {
    if (fret === -1) {
      return hasDoubleDigits ? '----' : '---';
    }
    const fretStr = fret.toString();
    if (hasDoubleDigits) {
      return fretStr.length === 1 ? `-${fret}--` : `-${fret}-`;
    } else {
      return `-${fret}-`;
    }
  };

  return (
    <div className="tabs">
      <div className="tab-display">
        {activeIndexes.map((fret, idx) => (
          <div key={idx} className="tab-fret">
            {fret === -1 ? '-' : fret}
          </div>
        ))}
      </div>
      <pre>
        {strings.map((stringName, idx) => (
          <div key={idx}>
            {stringName}:|{formatFret(activeIndexes[idx])}|
          </div>
        ))}
      </pre>
    </div>
  );
}

export default Tabs;
