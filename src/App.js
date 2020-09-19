import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const adjectives = ["pinky", "yellow", "lemony", "safe", "real", "praying"];
  const nouns = ["cat", "goat", "whale", "pen", "spoon", "shrimp"];


  const generateName = () => {
    const randomAdjectives = adjectives.sort((a, b) => 0.5 - Math.random());
    const randomNouns = nouns.sort((a, b) => 0.5 - Math.random());

    const newAdjective = randomAdjectives[0];
    const newNoun = randomNouns[0];

    setFirstName(newAdjective);
    setSecondName(newNoun);
  };

  return (
    <div className="App">
      <h1>minty fresh names</h1>

      <p>{firstName + secondName}</p>

      <button onClick={generateName}>
        Generate a new name!
        </button>

    </div>
  );
}

export default App;
