import { useState } from "react";

import Choice from "../components/Choice"
import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

const Game = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  // const [win, setWin] = useState<boolean | null>(null)
  const [win, setWin] = useState<string | null>(null);

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
        setWin("true");
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setWin("false");
    }
  };

  return (
    <>
    <div className="my-[7rem] gap-[2rem] flex flex-wrap justify-center bg-triangle-bg background-image w-[100%]">
      <button
        onClick={() => handleClick("paper")}
        className="rounded-full border-[1rem] border-[#4865f4] bg-white w-fit"
      >
        <img className="p-[1.5rem] w-[6rem]" src={Paper} />
      </button>
      <button
        onClick={() => handleClick("scissors")}
        className="rounded-full border-[1rem] border-[#ec9e0e] bg-white w-fit"
      >
        <img className="p-[1.5rem] w-[6rem]" src={Scissors} />
      </button>
      <button
        onClick={() => handleClick("rock")}
        className="rounded-full border-[1rem] border-[#dc2e4e] bg-white w-fit"
      >
        <img className="p-[1.5rem] w-[6rem]" src={Rock} />
      </button>
    </div>
    {userChoice === !null && <Choice/>}
    </>
  );
};

export default Game;
