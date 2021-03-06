import { useState } from "react";

const useWordts = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    //format new guess into array of letter objects
    //[{key: 'a', color: 'green'}]
    const formatGuess = () => {
        let solutionArr = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'coral'}
        });

        formattedGuess.forEach((letter, index) => {
            if (solutionArr[index] === letter.key) {
                formattedGuess[index].color = 'blue';
                solutionArr[index] = null;
            };

            if (solutionArr.includes(letter.key) && letter.color !== 'blue') {
                formattedGuess[index].color = 'yellow';
                solutionArr[solutionArr.indexOf(letter.key)] = null;
            }
        });

        return formattedGuess;
    };

    //add new guesses to state, update isCorrect state, add 1 to turns state
    const addNewGuess = (formattedGuess) => {
         if (currentGuess === solution) {
            setIsCorrect(true);
         };

         setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
         });

         setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
         });

         setTurn((prevTurn) => {
            return prevTurn + 1;
         })

         setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys};

            formattedGuess.forEach((letter) => {
                const currentColor = newKeys[letter.key];

                if (letter.color === 'blue') {
                    newKeys[letter.key] = 'blue';
                    return;
                };
                if (letter.color === 'yellow' && currentColor !== 'blue') {
                    newKeys[letter.key] = 'yellow';
                    return;
                };
                if (letter.color === 'coral' && currentColor !== 'blue' && currentColor !== 'yellow') {
                    newKeys[letter.key] = 'coral';
                    return;
                };
            });

            return newKeys;
         });
         setCurrentGuess('');
    };

    //keyup event to track current guess, add guess if enter is pressed
    const handleKeyup = ({ key }) => {
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return;  
        };
    
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                })
            }
        };

        if (key === 'Enter') {
            if (history.includes(currentGuess)) {
                alert('this word has already been guessed!');
                setCurrentGuess('');
                return;
            };
            if (currentGuess.length !== 5) {
                alert('guess must be 5 letters!')
                return;
            };

            const formatted = formatGuess();
            addNewGuess(formatted);
        };
    };

    const handleKeyClick = (key) => {
        if (key === 'BACK') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return;  
        };
    
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                })
            }
        };

        if (key === 'ENTER') {
            if (history.includes(currentGuess)) {
                alert('this word has already been guessed!');
                setCurrentGuess('');
                return;
            };
            if (currentGuess.length !== 5) {
                alert('guess must be 5 letters!')
                return;
            };

            const formatted = formatGuess();
            addNewGuess(formatted);
        };
    };

    return {turn, currentGuess, guesses, isCorrect, handleKeyup, handleKeyClick, usedKeys};

};

export default useWordts;