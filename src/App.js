import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { Display } from "./globalStyles";
import Logo from "./components/Logo";
import Name from "./components/Name";
import Button from "./components/Button";

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
    <div>
      <Logo />

      <Display>
        <Name firstLock={firstLock} firstName={firstName} />
        <Name secondLock={secondLock} secondName={secondName} />
      </Display>

      <Button generateName={generateName} />

    </div>
  );
}

export default App;
