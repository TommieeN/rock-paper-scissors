import { ResultProps } from "../types";

import { AnimatePresence } from "framer-motion";

import UserComponent from "./UserComponent";
import ComputerComponent from "./ComputerComponent";
import Results from "./Results";

const Round = ({
  userChoice,
  computerChoice,
  win,
  handlePlayAgain,
}: ResultProps) => {

  return (
    <AnimatePresence>
      <div className="my-[4rem] gap-[2rem] flex flex-wrap items-center justify-center">
        <UserComponent userChoice={userChoice} />
        {!computerChoice ? <div
      className="bg-[#00000039] animate-pulse rounded-[100%] mb-[2rem] w-[8.2rem] h-[8.2rem] opacity-10 
     lg:order-last lg:w-[13rem] lg:h-[13rem] lg:mb-[2rem]"
    /> : (
          <ComputerComponent computerChoice={computerChoice}/>
        )}
        <Results win={win} userChoice={userChoice} computerChoice={computerChoice} handlePlayAgain={handlePlayAgain}/>
      </div>
    </AnimatePresence>
  );
};

export default Round;
