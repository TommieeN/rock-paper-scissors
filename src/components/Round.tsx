import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

import { RoundProps } from "../types";
import { motion, AnimatePresence } from "framer-motion";

const Round = ({
  userChoice,
  computerChoice,
  win,
  handlePlayAgain,
}: RoundProps) => {

  // Place holder for computer choice
  const emptyCircle = () => (
    <div
      className="bg-[#00000039] animate-pulse rounded-[100%] w-[8rem] h-[8rem] opacity-10 
     lg:order-last lg:w-[13rem] lg:h-[13rem] lg:mb-[2rem]"
    />
  );

  return (
    <AnimatePresence>
      <div className="my-[4rem] gap-[2rem] flex flex-wrap items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x:-600 }}
          animate={{ opacity: 1, x:0}}
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
        {!computerChoice ? <div
      className="bg-[#00000039] animate-pulse rounded-[100%] mb-[2rem] w-[8.2rem] h-[8.2rem] opacity-10 
     lg:order-last lg:w-[13rem] lg:h-[13rem] lg:mb-[2rem]"
    /> : (
          <motion.div
          initial={{ opacity: 0,}}
          animate={{ opacity: 1,}}
          transition={{ ease: "easeOut", duration: 0.5 }}
          exit={{ opacity: 0 }}
            className="text-center flex flex-col justify-between lg:order-last"
          >
            {computerChoice === "paper" ? (
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
            {computerChoice === "scissors" ? (
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
            {computerChoice === "rock" ? (
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
            <p className="pt-[1rem] text-white">THE HOUSE PICKED</p>
          </motion.div>
        )}
        <motion.div
        transition={{ ease: "easeOut", duration: 2.5 }}
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0 }}
          className={`${computerChoice !== null ? "flex flex-col justify-center" : "hidden" }`}
        >
          {computerChoice !== null &&
            (win === true ? (
              <h2
                className={`text-white text-[3rem] font-bold ${
                  computerChoice !== null ? "" : "hidden"
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
      </div>
    </AnimatePresence>
  );
};

export default Round;
