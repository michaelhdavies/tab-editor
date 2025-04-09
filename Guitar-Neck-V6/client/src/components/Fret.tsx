import React from "react";
import "../styles/Fret.merged.css";

interface FretProps {
  children: React.ReactNode;
  fretNumber: number;
  isActive: boolean;
  onClick: () => void;
}

const Fret: React.FC<FretProps> = ({
  children,
  fretNumber,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`fret ${isActive ? "active" : ""}`}
      onClick={onClick}
      data-fret={fretNumber}
    >
      <span className="fret-number">{fretNumber}</span>
      {children}
    </button>
  );
};

export default Fret;
