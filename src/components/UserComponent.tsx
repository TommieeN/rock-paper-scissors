import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

import { UserProps } from "../types";

import { motion } from "framer-motion";

const UserComponent = ({ userChoice }: UserProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -600 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-between text-center"
    >
      {userChoice === "paper" ? (
        <div className="bg-gradient-paper border-b-[0.35rem] border-[#36479c] button-style-round">
          <div className="bg-white border-t-[5px] rounded-[100%]">
            <img
              className="p-[1.5rem] w-[100%] lg:w-[10rem] lg:p-[2rem]"
              alt="paper"
              src={Paper}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {userChoice === "scissors" ? (
        <div className="bg-gradient-scissors border-b-[0.35rem] border-[#896728] button-style-round">
          <div className="bg-white border-t-[5px] rounded-[100%]">
            <img
              className="p-[1.5rem] w-[100%] lg:w-[10rem] lg:p-[2rem]"
              alt="scissors"
              src={Scissors}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {userChoice === "rock" ? (
        <div className="bg-gradient-rock border-b-[0.35rem] border-[#932c3f] button-style-round">
          <div className="bg-white border-t-[5px] rounded-[100%]">
            <img
              src={Rock}
              className="p-[1.5rem] w-[100%] lg:w-[11rem] lg:p-[2rem]"
              alt="rock"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <p className="pt-[1rem] text-white">YOU PICKED</p>
    </motion.div>
  );
};

export default UserComponent;
