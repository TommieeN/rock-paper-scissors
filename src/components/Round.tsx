import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

import { RoundProps } from "../types";

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
    <div className="my-[4rem] gap-[2rem] flex flex-wrap items-center justify-center">
      <div className="flex flex-col justify-between text-center">
        {userChoice === "paper" ? (
          <div className="bg-gradient-paper button-style-round">
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
          <div className="bg-gradient-scissors button-style-round">
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
          <div className="bg-gradient-rock button-style-round">
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
      </div>
      {!computerChoice ? (
        emptyCircle()
      ) : (
        <div className="text-center flex flex-col justify-between lg:order-last">
          {computerChoice === "paper" ? (
            <div className="bg-gradient-paper button-style-round">
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
            <div className="bg-gradient-scissors button-style-round">
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
            <div className="bg-gradient-rock button-style-round">
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
        </div>
      )}
      <div className="flex flex-col justify-center">
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
          <button
            onClick={handlePlayAgain}
            className={`tracking-[0.15rem] text-[#3b4363] text-[0.9rem] bg-white mt-[0.5rem] px-[1rem] py-[0.6rem] rounded-[0.4rem] ${
              computerChoice !== null ? "" : "invisible"
            }`}
          >
            PLAY AGAIN
          </button>
        }
      </div>
    </div>
  );
};

export default Round;
