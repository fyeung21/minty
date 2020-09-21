import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { SiteBkg } from "./globalStyles";
import Logo from "./components/Logo";

const App = () => {

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [firstToggle, setFirstToggle] = useState(false);
  const [secondToggle, setSecondToggle] = useState(false);

  const adjectives = ["pinky", "yellow", "lemony", "safe", "real", "praying"];
  const nouns = ["cat", "goat", "whale", "pen", "spoon", "shrimp"];


  const generateName = () => {
    const randomAdjectives = adjectives.sort((a, b) => 0.5 - Math.random());
    const randomNouns = nouns.sort((a, b) => 0.5 - Math.random());

    const newAdjective = randomAdjectives[0];
    const newNoun = randomNouns[0];

    if (!firstToggle) {
      setFirstName(newAdjective);
    } else {
      setFirstName(firstName);
    };

    if (!secondToggle) {
      setSecondName(newNoun);
    } else {
      setSecondName(secondName);
    }
  };

  const firstLock = () => {
    setFirstToggle(!firstToggle);
  }

  const secondLock = () => {
    setSecondToggle(!secondToggle);
  }

  return (
    <SiteBkg>
      <Logo />

      <div onClick={firstLock}>
        <p>{firstName}</p>
      </div>

      <div onClick={secondLock}>
        <p>{secondName}</p>
      </div>

      <button onClick={generateName}>
        Generate a new name!
      </button>

    </SiteBkg>
  );
}

export default App;
