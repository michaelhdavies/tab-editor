// src/components/LiveArray.tsx

import { useTab } from './TabContext.js';

function LiveArray() {
  const { activeIndexes } = useTab();

  return (
    <div className="tab-display">
      {activeIndexes.map((fret, idx) => (
        <div key={idx} className="tab-fret">
          {fret === -1 ? '-' : fret}
        </div>
      ))}
    </div>
  );
}

export default LiveArray;
