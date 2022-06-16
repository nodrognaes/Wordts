import React from "react";
import './keyboard.css'

const KeyBoard = () => {
    const keys1 = [{ 'key': 'q' }, { 'key': 'w' }, { 'key': 'e' }, { 'key': 'r' }, { 'key': 't' }, { 'key': 'y' }, { 'key': 'u' }, { 'key': 'i' }, { 'key': 'o' }, { 'key': 'p' }];
    const keys2 = [{ 'key': 'a' }, { 'key': 's' }, { 'key': 'd' }, { 'key': 'f' }, { 'key': 'g' }, { 'key': 'h' }, { 'key': 'j' }, { 'key': 'k' }, { 'key': 'l' }];
    const keys3 = [{ 'key': 'z' }, { 'key': 'x' }, { 'key': 'c' }, { 'key': 'v' }, { 'key': 'b' }, { 'key': 'n' }, { 'key': 'm' }, { 'key': 'BACK' }, { 'key': 'ENTER' }];

    return (
        <div className="keyboard">
            {keys1 && keys1.map((letter) => {
                return (
                    <div key={letter.key}>{letter.key}</div>
                )
            })}
            <br />
            {keys2 && keys2.map((letter) => {
                return (
                    <div key={letter.key}>{letter.key}</div>
                )
            })}
            <br />
            {keys3 && keys3.map((letter) => {
                return (
                    <div key={letter.key}>{letter.key}</div>
                )
            })}
        </div>
    )

};

export default KeyBoard;