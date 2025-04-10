// src/components/ButtonsBox.tsx

import { useTab } from './TabContext.js';

function ButtonsBox() {
  const { activeIndexes, activeTabs, setActiveTabs, setActiveIndexes } = useTab();

  const addTab = () => {
    setActiveTabs([...activeTabs, [...activeIndexes]]);
  };

  const removeLastTab = () => {
    setActiveTabs(activeTabs.slice(0, -1));
  };

  const resetTabs = () => {
    setActiveTabs([]);
    setActiveIndexes([-1, -1, -1, -1, -1, -1]);
  };

  return (
    <div className="buttonsDiv">
      <button className="addButton" onClick={addTab}>
        {'\u002B'}
      </button>
      <button className="removeButton" onClick={removeLastTab}>
        {'\u2212'}
      </button>
      <button className="resetButton" onClick={resetTabs}>
        {'\u21BB'}
      </button>
    </div>
  );
}

export default ButtonsBox;
