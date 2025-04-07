// src/App.tsx

import './App.css';
import NeckBox from './components/NeckBox.js';
import LiveTabs from './components/LiveTabs.js';
import LiveArray from './components/LiveArray.js';
import { TabProvider } from './components/TabProvider.js';
import ButtonsBox from './components/ButtonsBox.js';
import DisplayTabs from './components/DisplayTabs.js';

function App() {
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

export default App;
