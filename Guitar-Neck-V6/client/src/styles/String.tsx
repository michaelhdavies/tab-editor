import React from "react";
import "./String.merged.css";

interface StringProps {
  children: React.ReactNode;
  stringNumber: number;
}

const String: React.FC<StringProps> = ({ children, stringNumber }) => {
  const stringName = ["e", "B", "G", "D", "A", "E"][stringNumber - 1];

  return (
    <div className={`guitar-string string-${stringNumber}`}>
      <span className="string-label">{stringName}</span>
      {children}
    </div>
  );
};

export default String;
