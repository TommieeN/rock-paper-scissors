import Round from "./Round";
import Choice from "./Choice";
import Header from "./Header";

import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

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

  // Set user's choice on click
  const handleClick = (value: string) => {
    setTimeout(() => {
      setUserChoice(value);
      generateComputerChoice();
    }, 800);
  };

  // Restart function
  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setWin(null);
  };

  // Add delay for animation and generate random computer choice
  const generateComputerChoice = () => {
    setComputerChoice(null);

    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
    }, 1800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header score={score} />
        <div className="flex flex-col justify-center items-center">
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Game;
