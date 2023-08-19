import { useState } from "react";

import Choice from "../components/Choice";
import Round from "./Round";
// import Paper from "../assets/images/icon-paper.svg";
// import Scissors from "../assets/images/icon-scissors.svg";
// import Rock from "../assets/images/icon-rock.svg";

const Game = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [win, setWin] = useState<boolean | null>(null)
  // const [win, setWin] = useState<string | null>(null);

  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value: string) => {
    setUserChoice(value);
    generateComputerChoice();
    checkResult();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

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
    }
  };

  return (
    <>
      {userChoice ? (
        <Round userChoice={userChoice} computerChoice={computerChoice} />
      ) : (
        <Choice handleClick={handleClick} />
      )}
    </>
  );
};

export default Game;
