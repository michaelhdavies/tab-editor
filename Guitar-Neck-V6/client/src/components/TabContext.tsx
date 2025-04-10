// src/components/TabContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

export type TabContextType = {
  activeIndexes: number[];
  setActiveIndexes: (indexes: number[]) => void;
  activeTabs: number[][];
  setActiveTabs: (tabs: number[][]) => void;
};

export const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used inside a TabProvider");
  }
  return context;
};

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>(
    Array(6).fill(-1)
  );
  const [activeTabs, setActiveTabs] = useState<number[][]>([]);

  return (
    <TabContext.Provider
      value={{ activeIndexes, setActiveIndexes, activeTabs, setActiveTabs }}
    >
      {children}
    </TabContext.Provider>
  );
};
