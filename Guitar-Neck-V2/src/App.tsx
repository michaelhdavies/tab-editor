// src/App.tsx

import "./App.css";
// import NeckBox from "./components/NeckBox.js";
import Tabs from "./components/Tabs.js";
import { TabProvider } from "./components/TabProvider.js";
import GuitarNeck from "./styles/GuitarNeck";

function App() {
  return (
    <>
      <header>
        <h1>Guitar Neck</h1>
      </header>
      <TabProvider>
        <GuitarNeck />
        <Tabs />
      </TabProvider>
    </>
  );
}

export default App;
