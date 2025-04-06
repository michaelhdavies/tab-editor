// src/App.tsx

import './App.css'
import NeckBox from './components/NeckBox.js'
import LiveTabs from './components/LiveTabs.js';
import { TabProvider } from './components/TabProvider.js';
import ButtonsBox from './components/ButtonsBox.js';
import DisplayTabs from './components/DisplayTabs.js';

function App() {
  return (
    <>
      <TabProvider>
        <div className="pageLayout">
          <NeckBox />
          <div className="bottomRow">
            <ButtonsBox />
            <LiveTabs />
            <DisplayTabs />
          </div>
        </div>
      </TabProvider>
    </>
  )
}

export default App;
