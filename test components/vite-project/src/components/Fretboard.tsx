import { useState } from "react";
import { useTab } from "../TabContext";

const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const tunings = {
  standard: ["E", "B", "G", "D", "A", "E"],
  dropD: ["E", "B", "G", "D", "A", "D"],
  openG: ["D", "B", "G", "D", "G", "D"],
  openD: ["D", "A", "F#", "D", "A", "D"],
};

const getNoteName = (openStringNote: string, fretIdx: number) => {
  const startIdx = chromaticScale.indexOf(openStringNote);
  const noteIdx = (startIdx + fretIdx) % chromaticScale.length;
  return chromaticScale[noteIdx];
};

const Fretboard = () => {
  const { selectedNotes, toggleNote } = useTab();
  const [selectedTuning, setSelectedTuning] = useState<keyof typeof tunings>("standard");

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white">
      <h2 className="text-lg mb-2">Fretboard</h2>

      {/* Tuning Selector */}
      <select
        value={selectedTuning}
        onChange={(e) => setSelectedTuning(e.target.value as keyof typeof tunings)}
        className="mb-4 p-2 bg-gray-700 text-white border border-gray-500 rounded"
      >
        {Object.keys(tunings).map((tuning) => (
          <option key={tuning} value={tuning}>
            {tuning.replace(/([a-z])([A-Z])/g, "$1 $2")} {/* Format text */}
          </option>
        ))}
      </select>

      <div className="border-2 border-gray-600 rounded-lg p-2">
        {tunings[selectedTuning].map((openStringNote, stringIdx) => (
          <div key={stringIdx} className="flex">
            {Array.from({ length: 13 }).map((_, fretIdx) => {
              const note = getNoteName(openStringNote, fretIdx);
              const isSelected = selectedNotes.some(
                (n) => n.string === stringIdx && n.fret === fretIdx
              );

              return (
                <button
                  key={fretIdx}
                  onClick={() => toggleNote(stringIdx, fretIdx)}
                  className={`w-12 h-14 border border-gray-500 flex items-center justify-center text-sm ${
                    isSelected ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {note}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fretboard;





