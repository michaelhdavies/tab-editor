// src/App.tsx

import React from "react";
import "./App.merged.css"; // Import merged styles first
import "./styles/index.css"; // Import our new merged styles
import "./styles/TabEditor.css";
import "./styles/global.css"; // This will override all other styles
import GuitarNeck from "./components/GuitarNeck"; // Updated import path
import LiveTabs from "./components/LiveTabs";
import LiveArray from "./components/LiveArray";
import { TabProvider } from "./components/TabProvider";
import ButtonsBox from "./components/ButtonsBox";
import DisplayTabs from "./components/DisplayTabs";

const App: React.FC = () => {
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
};

export default App;
