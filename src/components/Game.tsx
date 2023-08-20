import { useState } from "react";

import Choice from "../components/Choice";
import Round from "./Round";

const Game = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [win, setWin] = useState<boolean | null>(null)

  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value: string) => {
    setUserChoice(value);
    generateComputerChoice();
    checkResult();
  };

  // Randomize computer choice
  const generateComputerChoice = () => {

    setComputerChoice(null)

    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      checkResult()
    }, 1500)
  };

  // Checking results based on choices
  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setWin(true);
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setWin(false);
        break;
      case "paperpaper":
      case "scissorsscissors":
      case "rockrock":
    }
  };

  return (
    <>
      {userChoice ? (
        <Round userChoice={userChoice} computerChoice={computerChoice} win={win} />
      ) : (
        <Choice handleClick={handleClick} />
      )}
    </>
  );
};

export default Game;
