import React from "react";
import './instructions.css';

const Instructions = () => {

    return (
        <div className="instruct">
        <div className="instructText">
            <h2>Try to guess the secret word by entering any five-letter word.</h2>
            <p><span id="blue">__</span> means a correct letter was guessed in the correct spot</p>
            <p><span id="yellow">__</span> means a correct letter was guessed, but in the wrong spot</p>
            <p>and <span id="red">__</span> means tthe letter is not in the secret word.</p>
            <p>GOOD LUCK~!</p>
        </div>
        {/* <!-- <div><img src='PinClipart.com_neptune-clipart_3294677.png' /></div> --> */}
    </div>
    )
};

export default Instructions;