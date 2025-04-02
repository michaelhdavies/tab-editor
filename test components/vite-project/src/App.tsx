import { TabProvider } from "./TabContext";
import Fretboard from "./components/Fretboard";
import TabEditor from "./components/TabEditor";

const App = () => {
  return (
    <TabProvider>
      <div className="flex flex-col items-center min-h-screen bg-black text-white p-4">
        <h1 className="text-2xl font-bold">Guitar Tab Editor</h1>
        <Fretboard />
        <TabEditor />
      </div>
    </TabProvider>
  );
};

export default App;
