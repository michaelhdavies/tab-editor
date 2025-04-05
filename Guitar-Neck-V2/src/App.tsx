// src/App.tsx

import './App.css'
import NeckBox from './components/NeckBox.js'
import Tabs from './components/Tabs.js';
import { TabProvider } from './components/TabProvider.js';


function App() {

  return (
    <>
    <TabProvider>
      <NeckBox />
      <Tabs />
    </TabProvider>
    </>
  )
}

export default App;
