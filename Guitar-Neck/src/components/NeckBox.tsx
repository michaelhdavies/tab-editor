import { useState } from 'react'
import FretBox from './FretBox'




function NeckBox() {
    const [activeStrings, setActiveStrings] = useState([0,0,0,0,0,0]);
    return (
      <>
        <FretBox fretNumber={0}/>
        <FretBox fretNumber={1}/>
        <FretBox fretNumber={2}/>
        <FretBox fretNumber={3}/>
      </>
    )
  }
  
  export default NeckBox