import { useState, useEffect } from 'react';
import './App.css';
import Wordts from './components/Wordts/Wordts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import data from './data';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const rand = data.solutions[Math.floor(Math.random() * data.solutions.length)].word;
    setSolution(rand);
  }, [setSolution]);

  return (
    <div className="App">
      <Header />
      {solution && <Wordts solution={solution} />}
      <Footer />
    </div>
  );
}

export default App;

/*
data we need to track:
  -- solution
    --5 letter string
  --past guesses
    --array of past guesses
    --each guess is array of letter objects [{}, {}, {}...]
    --each object reps a letter in the guess word {letter: 'a', color: 'yellow'}
  --current guess
    --string
  --keypad letters
    --array of letter objects [{key: 'a', color: 'green'}. {}...]
  --number of turns
    --integer 0-6

game process:
  --entering words
    --user enters a letter and a square is filled with letter
    --when a user hits delete, it deletes the prev letter
    --when a user hits enter it submits the word
      --if all squares are not filled in it is not submitted
      --if word has been guessed already it is not submitted
    --checking submitted words:
      --each letter is checked to see if it matches solution
      --each letter is assigned a color based on if it is included in correct word
        --exact match - blue
        --partial match - yellow
        --no match - coral
      --guess is added to grid with colors
      --current guess moves to next row
      --keypad letters are updated - shaded out
    --ending the game:
      --when the guessed word matches solution
        --modal to say 'well done!'
        --button to try again
      --when user runs out of guesses
        --'you lose!'
        --button to try again
*/