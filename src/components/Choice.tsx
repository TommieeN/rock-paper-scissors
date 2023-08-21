import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

import { ChoiceProps } from "../types";

import { motion } from "framer-motion";

const Choice = ({ handleClick } :ChoiceProps) => {

  return (
    <section className="bg-triangle-bg background-image sm:w-[18rem] lg:w-[20rem]">
      <div className="my-[5rem] gap-[1.7rem] flex flex-wrap justify-center w-[100%] lg:gap-[4rem] lg:my-[2rem]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, rotate: 90 }}
          onClick={() => handleClick("paper")}
          className="button-style bg-gradient-paper border-b-[0.35rem] border-[#36479c] lg:w-[40%]"
        >
          <div className="hover:bg-white bg-[#d8d8d8] border-t-[5px] rounded-[100%]">
            <img className="p-[1.5rem] w-[100%]" src={Paper} />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, rotate: 50 }}
          onClick={() => handleClick("scissors")}
          className="bg-gradient-scissors border-b-[0.35rem] border-[#896728] button-style"
        >
          <div className="hover:bg-white bg-[#d8d8d8] border-t-[5px] rounded-[100%]">
            <img className="p-[1.5rem] w-[100%]" src={Scissors} />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, rotate: 90 }}
          onClick={() => handleClick("rock")}
          className="bg-gradient-rock border-b-[0.35rem] border-[#932c3f] button-style"
        >
          <div className="hover:bg-white bg-[#d8d8d8] border-t-[5px] rounded-[100%]">
            <img className="p-[1.5rem] w-[100%]" src={Rock} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Choice;
