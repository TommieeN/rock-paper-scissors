import { useState, useEffect } from "react";

import Choice from "../components/Choice";
import Round from "./Round";

const Game = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [win, setWin] = useState<boolean | null>(null);

  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (userChoice !== null && computerChoice !== null) {

      // Checking results based on choices
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
      }
    }
  }, [userChoice, computerChoice]);

  const handleClick = (value: string) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setWin(null);
  };

  const generateComputerChoice = () => {
    setComputerChoice(null);

    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
    }, 1500);
  };

  return (
    <>
      {userChoice ? (
        <Round
          userChoice={userChoice}
          computerChoice={computerChoice}
          win={win}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <Choice handleClick={handleClick} />
      )}
    </>
  );
};

export default Game;
