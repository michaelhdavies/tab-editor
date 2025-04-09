// src/App.tsx

import "./styles/index.css"; // Import our new merged styles
import GuitarNeck from "./components/GuitarNeck"; // Updated import path
import LiveTabs from "./components/LiveTabs.js";
import LiveArray from "./components/LiveArray.js";
import { TabProvider } from "./components/TabProvider.js";
import ButtonsBox from "./components/ButtonsBox.js";
import DisplayTabs from "./components/DisplayTabs.js";

function App() {
  return (
    <>
      <TabProvider>
        <div className="guitar-interface">
          <LiveArray />
          <GuitarNeck />
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
