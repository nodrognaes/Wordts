import React from "react";
import './keyboard.css'

const KeyBoard = ({ usedKeys, handleKeyClick }) => {
    const keys1 = [{ 'key': 'q' }, { 'key': 'w' }, { 'key': 'e' }, { 'key': 'r' }, { 'key': 't' }, { 'key': 'y' }, { 'key': 'u' }, { 'key': 'i' }, { 'key': 'o' }, { 'key': 'p' }];
    const keys2 = [{ 'key': 'a' }, { 'key': 's' }, { 'key': 'd' }, { 'key': 'f' }, { 'key': 'g' }, { 'key': 'h' }, { 'key': 'j' }, { 'key': 'k' }, { 'key': 'l' }];
    const keys3 = [{ 'key': 'z' }, { 'key': 'x' }, { 'key': 'c' }, { 'key': 'v' }, { 'key': 'b' }, { 'key': 'n' }, { 'key': 'm' }, { 'key': 'BACK' }, { 'key': 'ENTER' }];

    const word = [];
    const clickKeys = (e) => {
       console.log(e);
    }

    return (
        <div className="keyboard">
            {keys1 && keys1.map((letter) => {
                const color = usedKeys[letter.key];
                return (
                    <div key={letter.key} className={color} onClick={() => handleKeyClick(letter.key)}>{letter.key}</div>
                )
            })}
            <br />
            {keys2 && keys2.map((letter) => {
                const color = usedKeys[letter.key];
                return (
                    <div key={letter.key} className={color} onClick={() => handleKeyClick(letter.key)}>{letter.key}</div>
                )
            })}
            <br />
            {keys3 && keys3.map((letter) => {
                const color = usedKeys[letter.key];
                return (
                    <div key={letter.key} className={color} onClick={() => handleKeyClick(letter.key)}>{letter.key}</div>
                )
            })}
        </div>
    )

};

export default KeyBoard;