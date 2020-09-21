import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { SiteBkg } from "./globalStyles";
import Logo from "./components/Logo";
import Name from "./components/Name";

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
        <Name firstName={firstName} />
      </div>

      <div onClick={secondLock}>
        <Name secondName={secondName} />
      </div>

      <button onClick={generateName}>
        Generate a new name!
      </button>

    </SiteBkg>
  );
}

export default App;
