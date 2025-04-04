import { useState } from 'react'
type NoteBoxProps = {
  openString: string,
}
function NoteBox({ openString }: NoteBoxProps) { 
  const [noteDisplay, setNoteDisplay] = useState(false);
  return (
    <>
      <div className={`noteBox ${openString}`} >
        <button className= {`noteMarker ${noteDisplay?"noteMarkerOn":"noteMarkerOff"}`} onClick={() => setNoteDisplay(!noteDisplay)}>
        {noteDisplay && "\u2B24"}
        </button>
        {/* <h2>{openString}</h2> */}
      </div>  
    </>
  )
}

export default NoteBox;