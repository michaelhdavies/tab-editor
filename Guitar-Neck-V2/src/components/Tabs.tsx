// src/components/Tabs.tsx

import { useTab } from './TabContext.js';

function Tabs() {
  const { activeIndexes } = useTab();

  const strings = ['e', 'B', 'G', 'D', 'A', 'E'];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Tab:</h2>
      <pre style={{ fontSize: '24px', lineHeight: '1.5', display: 'inline-block', textAlign: 'left' }}>
        {strings.map((stringName, idx) => (
          <div key={idx}>
            {stringName}:|-{activeIndexes[idx]}-|
          </div>
        ))}
      </pre>
    </div>
  );
}

export default Tabs;
