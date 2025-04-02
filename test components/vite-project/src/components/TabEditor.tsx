import { useTab } from "../TabContext";
import { getFrequency } from "../utils/soundUtils";

const TabEditor = () => {
  const { selectedNotes } = useTab();

  const playTab = () => {
    const audioCtx = new window.AudioContext();

    selectedNotes.forEach((note, index) => {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      const frequency = getFrequency(note.string, note.fret);
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime + index * 0.4); // Delay for sequencing
      gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime + index * 0.4);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start(audioCtx.currentTime + index * 0.4);
      oscillator.stop(audioCtx.currentTime + (index + 1) * 0.4);
    });
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-lg mb-2">Tab Editor</h2>
      <div className="border border-gray-600 p-2">
        {Array.from({ length: 6 }).map((_, stringIdx) => (
          <div key={stringIdx} className="flex">
            <span className="w-6">{6 - stringIdx} |</span>
            <span className="flex-grow border-b border-gray-500">
              {selectedNotes
                .filter((n) => n.string === stringIdx)
                .map((note) => (
                  <span key={note.fret} className="px-2">
                    {note.fret}
                  </span>
                ))}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={playTab}
        className="mt-4 px-4 py-2 bg-green-500 rounded hover:bg-green-600"
      >
        Play Tab
      </button>
    </div>
  );
};

export default TabEditor;
