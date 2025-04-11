// src/components/FretNums.tsx

function FretNums() {
    const frets = Array.from({ length: 25 }, (_, index) => index);
  
    return (
      <div className="fretNumsRow">
        {frets.map((fretNumber) => (
          <div key={fretNumber} className="fretNumBox">
            {fretNumber}
          </div>
        ))}
      </div>
    );
  }
  
  export default FretNums;
  