// src/components/TabContext.tsx

import { createContext, useContext } from 'react';

export type TabContextType = {
  activeIndexes: number[];
  setActiveIndexes: (indexes: number[]) => void;
  activeTabs: number[][];
  setActiveTabs: (tabs: number[][]) => void;
};


export const TabContext = createContext<TabContextType | undefined>(undefined);

export function useTab() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used inside a TabProvider');
  }
  return context;
}
