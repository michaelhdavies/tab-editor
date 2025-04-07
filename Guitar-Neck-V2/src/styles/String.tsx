import React from 'react';
import './String.css';

interface StringProps {
  children: React.ReactNode;
  stringNumber: number;
}

const String: React.FC<StringProps> = ({ children, stringNumber }) => {
  return (
    <div className={`guitar-string string-${stringNumber}`}>
      {children}
    </div>
  );
};

export default String;
