import {motion} from "framer-motion"

import { ResultProps } from "../types"

const Results = ({computerChoice, win, handlePlayAgain}: ResultProps) => {
  return (
    <motion.div
        transition={{ ease: "easeOut", duration: 2.5 }}
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0 }}
          className={`${computerChoice !== null ? "flex flex-col justify-center" : "lg:flex hidden" }`}
        >
          {computerChoice !== null &&
            (win === true ? (
              <h2
                className={`text-white text-[3rem] font-bold ${
                  computerChoice !== null ? "" : "invisible"
                }`}
              >
                YOU <span className="text-[#4af04a]">WIN</span>
              </h2>
            ) : win === false ? (
              <h2
                className={`text-white text-[3rem] font-bold ${
                  computerChoice !== null ? "" : "hidden"
                }`}
              >
                YOU <span className="text-[red]">LOSE</span>
              </h2>
            ) : (
              <h2
                className={`text-white text-[3rem] font-bold ${
                  computerChoice !== null ? "" : "hidden"
                }`}
              >
                IT'S A <span className="text-[yellow]">TIE</span>
              </h2>
            ))}
          {
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
              onClick={handlePlayAgain}
              className={`tracking-[0.15rem] text-[#3b4363] text-[0.9rem] bg-white mt-[0.5rem] px-[1rem] py-[0.6rem] rounded-[0.4rem] ${
                computerChoice !== null ? "" : "invisible"
              }`}
            >
              PLAY AGAIN
            </motion.button>
          }
        </motion.div>
  )
}

export default Results