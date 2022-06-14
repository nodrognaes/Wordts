import React from "react";
import './row.css';

const Row = ({ guess }) => {

    if (guess) {
        return (
          <div className="row past">
            {guess.map((letter, index) => (
              <div key={index} className={letter.color}>{letter.key}</div>
            ))}
          </div>
        )
      }
    
    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default Row;