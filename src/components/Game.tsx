import { useState, useEffect } from "react";

import Choice from "../components/Choice";
import Round from "./Round";
import Header from "./Header";

const Game = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [win, setWin] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {

    // Checking results based on choices
    if (userChoice !== null && computerChoice !== null) {
      switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          setWin(true);
          setScore((prevScore) => prevScore + 1);
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setWin(false);
          setScore((prevScore) => Math.max(prevScore - 1, 0));
          break;
        default:
          setWin(null);
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
      <Header score={score}/>
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
