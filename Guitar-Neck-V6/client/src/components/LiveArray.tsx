// src/components/LiveArray.tsx

import React from "react";
import { useTab } from "./TabContext";

const LiveArray: React.FC = () => {
  const { activeIndexes } = useTab();

  return (
    <div className="tab-display">
      {activeIndexes.map((fret, idx) => (
        <div key={idx} className="tab-fret">
          {fret === -1 ? "-" : fret}
        </div>
      ))}
    </div>
  );
};

export default LiveArray;
