import { useState } from 'react'
import NoteBox from './NoteBox.js'
type FretBoxProps = { 
  fretNumber: number,
}

function FretBox({fretNumber}: FretBoxProps) {
  return (
    <>
      <div className={`fretBox ${fretNumber}`} >
      <NoteBox openString="E"/>
      <NoteBox openString="A"/>
      <NoteBox openString="D"/>
      <NoteBox openString="G"/>
      <NoteBox openString="B"/>
      <NoteBox openString="e"/>
      {/* <h2>{fretNumber}</h2> */}
      </div>  
    </>
  )
}

export default FretBox;