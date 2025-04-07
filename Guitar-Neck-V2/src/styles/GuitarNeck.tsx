import React from 'react';
import NeckBox from '../components/NeckBox';
import './GuitarNeck.css';

const GuitarNeck: React.FC = () => {
  return (
    <div className="guitar-neck">
      <div className='headstock'/>  
      <div className="neck-body">
        <div className="nut">
        </div>
        <NeckBox />
      </div>
    </div>
  );
};

export default GuitarNeck;
