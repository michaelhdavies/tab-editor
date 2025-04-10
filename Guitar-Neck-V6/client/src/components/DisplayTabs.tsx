// src/components/DisplayTabs.tsx

import React from "react";
import { useTab } from "./TabContext";

const DisplayTabs: React.FC = () => {
  const { activeTabs } = useTab();
  const strings = ["e", "B", "G", "D", "A", "E"];

  const lines: Record<string, string[]> = {
    e: [],
    B: [],
    G: [],
    D: [],
    A: [],
    E: [],
  };

  const formatFret = (fret: number, hasDoubleDigits: boolean) => {
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

  const hasSavedTabs = activeTabs.length > 0;

  if (!hasSavedTabs) {
    for (const stringName of strings) {
      lines[stringName].push("---");
    }
  } else {
    activeTabs.forEach((tab) => {
      const hasDoubleDigits = tab.some((fret) => fret >= 10);
      tab.forEach((fret, idx) => {
        lines[strings[idx]].push(formatFret(fret, hasDoubleDigits));
      });
    });
  }

  return (
    <div className="tabs">
      <pre className="display-tab">
        {strings.map((stringName) => (
          <div key={stringName}>
            {stringName}:|{lines[stringName].join("")}|
          </div>
        ))}
      </pre>
    </div>
  );
};

export default DisplayTabs;
