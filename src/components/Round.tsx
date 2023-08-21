import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

interface RoundProps {
  userChoice: string;
  computerChoice: string;
  win: boolean | null;
  handlePlayAgain: () => void; // Function to handle play again
}

const Round = ({ userChoice, computerChoice, win, handlePlayAgain }: RoundProps) => {
  const choiceMapping = {
    paper: { color: "#4865f4", icon: Paper },
    scissors: { color: "#ec9e0e", icon: Scissors },
    rock: { color: "#dc2e4e", icon: Rock },
  };

  const getUserChoiceElement = (choice: string) => (
    <div
      className={`${
        choice === "paper"
          ? "bg-gradient-paper"
          : choice === "scissors"
          ? "bg-gradient-scissors"
          : "bg-gradient-rock"
      } button-style`}
    >
      <div className="bg-white border-t-[5px] rounded-[100%]">
      <img className="p-[1.5rem] w-[100%]" src={choiceMapping[choice].icon} alt={choice} />
      </div>
    </div>
  );

  const emptyCircle = () => (
    <div className="bg-black rounded-[100%] w-[8rem] h-[8rem] opacity-10"></div>
  );

  return (
    <div className="my-[7rem] gap-[2rem] flex flex-wrap items-center justify-center">
      <div className="flex flex-col justify-between text-center">
        {userChoice && getUserChoiceElement(userChoice)}
        <p className="pt-[1rem] text-white">YOU PICKED</p>
        </div>
      <div className="text-center flex flex-col justify-between">
        <div>
          {computerChoice ? getUserChoiceElement(computerChoice) : emptyCircle()}
        </div>
        <p className="pt-[1rem] text-white">THE HOUSE PICKED</p>
      </div>
      <div className="flex flex-col justify-center">
        {computerChoice !== null && (
          win === true ? (
            <h2 className={`text-white text-[3rem] font-bold ${computerChoice !== null ? "" : "invisible"}`}>YOU WIN</h2>
          ) : win === false ? (
            <h2 className={`text-white text-[3rem] font-bold ${computerChoice !== null ? "" : "invisible"}`}>YOU LOSE</h2>
          ) : (
            <h2 className={`text-white text-[3rem] font-bold ${computerChoice !== null ? "" : "invisible"}`}>IT'S A TIE</h2>
          )
        )}
        {<button onClick={handlePlayAgain} className={`tracking-[0.15rem] text-[#3b4363] text-[0.9rem] bg-white mt-[0.5rem] px-[1rem] py-[0.6rem] rounded-[0.4rem] ${computerChoice !== null ? "" : "invisible"}`}>
          PLAY AGAIN
        </button>}
      </div>
    </div>
  );
};

export default Round;
