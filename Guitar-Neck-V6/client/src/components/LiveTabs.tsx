// src/components/LiveTabs.tsx

import React from "react";
import { useTab } from "./TabContext";

const LiveTabs: React.FC = () => {
  const { activeIndexes } = useTab();
  const strings = ["e", "B", "G", "D", "A", "E"];

  const hasDoubleDigits = activeIndexes.some((fret) => fret >= 10);

  const formatFret = (fret: number): string => {
    if (fret === -1) {
      return hasDoubleDigits ? "----" : "---";
    }
    const fretStr = fret.toString();
    if (hasDoubleDigits) {
      return fretStr.length === 1 ? `-${fret}--` : `-${fret}-`;
    } else {
      return `-${fret}-`;
    }
  };

  return (
    <pre>
      {strings.map((stringName, idx) => (
        <div key={idx}>
          {stringName}:|{formatFret(activeIndexes[idx])}|
        </div>
      ))}
    </pre>
  );
};

export default LiveTabs;
