// src/components/TabProvider.tsx

import { useState } from 'react';
import { TabContext } from './TabContext';



export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([-1, -1, -1, -1, -1, -1]);
  const [activeTabs, setActiveTabs] = useState<number[][]>([]);
  
  return (
    <TabContext.Provider value={{ activeIndexes, setActiveIndexes, activeTabs, setActiveTabs }}>
      {children}
    </TabContext.Provider>
  );
}