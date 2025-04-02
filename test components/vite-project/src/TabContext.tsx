import React, { createContext, useContext, useState } from "react";

interface SelectedNote {
  string: number;
  fret: number;
}

interface TabContextType {
  selectedNotes: SelectedNote[];
  toggleNote: (stringIdx: number, fretIdx: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};

export const TabProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [selectedNotes, setSelectedNotes] = useState<SelectedNote[]>([]);

  const toggleNote = (stringIdx: number, fretIdx: number) => {
    setSelectedNotes((prev) =>
      prev.some((n) => n.string === stringIdx && n.fret === fretIdx)
        ? prev.filter((n) => n.string !== stringIdx || n.fret !== fretIdx)
        : [...prev, { string: stringIdx, fret: fretIdx }]
    );
  };

  return (
    <TabContext.Provider value={{ selectedNotes, toggleNote }}>
      {children}
    </TabContext.Provider>
  );
};
