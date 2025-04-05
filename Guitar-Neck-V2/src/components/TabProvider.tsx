// src/components/TabProvider.tsx

import { useState } from 'react';
import { TabContext } from './TabContext';
import type { ReactNode } from 'react';

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  return (
    <TabContext.Provider value={{ activeIndexes, setActiveIndexes }}>
      {children}
    </TabContext.Provider>
  );
}
