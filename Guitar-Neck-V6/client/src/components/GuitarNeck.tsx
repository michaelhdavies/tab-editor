import React from "react";
import NeckBox from "./NeckBox";
import FretNums from "./FretNums";
import "../styles/GuitarNeck.merged.css";

const GuitarNeck: React.FC = () => {
  return (
    <div className="guitar-neck-container">
      <FretNums />
      <div className="guitar-neck">
        <div className="headstock">
          <div className="tuning-pegs">
            <div className="tuning-pegs-row top">
              <div className="tuning-peg"></div>
              <div className="tuning-peg"></div>
              <div className="tuning-peg"></div>
            </div>
            <div className="tuning-pegs-row bottom">
              <div className="tuning-peg"></div>
              <div className="tuning-peg"></div>
              <div className="tuning-peg"></div>
            </div>
          </div>
        </div>
        <div className="neck-body">
          <div className="nut"></div>
          <NeckBox />
        </div>
      </div>
    </div>
  );
};

export default GuitarNeck;
