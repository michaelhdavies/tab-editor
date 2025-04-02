export const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const tuning = ["E", "B", "G", "D", "A", "E"]; // Standard tuning

export const getNoteName = (stringIdx: number, fretIdx: number) => {
  const openStringNote = tuning[stringIdx];
  const startIdx = chromaticScale.indexOf(openStringNote);
  const noteIdx = (startIdx + fretIdx) % chromaticScale.length;
  return chromaticScale[noteIdx];
};
export const calculateFrequency = (string: number, fret: number): number => {

  // Frequency calculation logic

  return 440; // Placeholder value

};



// Add the missing export for getFrequency

export const getFrequency = calculateFrequency;