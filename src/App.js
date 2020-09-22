import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { Display } from "./globalStyles";
import { adjectives } from "./assets/adjectiveList";
import { nouns } from "./assets/nounList";
import Logo from "./components/Logo";
import Name from "./components/Name";
import Button from "./components/Button";

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [firstToggle, setFirstToggle] = useState(false);
  const [secondToggle, setSecondToggle] = useState(false);

  // Generate New Name Function
  const generateName = () => {
    const randomAdjectives = adjectives.sort((a, b) => 0.5 - Math.random());
    const randomNouns = nouns.sort((a, b) => 0.5 - Math.random());

    const newAdjective = randomAdjectives[0];
    const newNoun = randomNouns[0];

    { !firstToggle ? setFirstName(newAdjective) : setFirstName(firstName) }

    { !secondToggle ? setSecondName(newNoun) : setSecondName(secondName) }
  };

  // Toggle Lock Functions
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
