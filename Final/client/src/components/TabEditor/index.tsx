// src/App.tsx

import NeckBox from './NeckBox.js';
import LiveTabs from './LiveTabs.js';
import LiveArray from './LiveArray.js';
import { TabProvider } from './TabProvider.js';
import ButtonsBox from './ButtonsBox.js';
import DisplayTabs from './DisplayTabs.js';

function TabEditor() {
  return (
    <>
      <TabProvider>
        <div className="pageLayout">
          <LiveArray />
          <NeckBox />
          <div className="bottomRow">
            <div className="tabs">
              <LiveTabs />
            </div>
            <ButtonsBox />
            <DisplayTabs />
          </div>
        </div>
      </TabProvider>
    </>
  );
}

export default TabEditor;
