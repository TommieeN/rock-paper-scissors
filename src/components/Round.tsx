import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

const Round = ({ userChoice, computerChoice, win }) => {

  // Create choice object for color & icon
  const choiceMapping = {
    paper: { color: "#4865f4", icon: Paper },
    scissors: { color: "#ec9e0e", icon: Scissors },
    rock: { color: "#dc2e4e", icon: Rock },
  };

  //  Based on user choice choose correct color & icon
  const getUserChoiceElement = (choice) => (
    <div
      className={`border-[1rem] ${
        choice === "paper"
          ? "border-blue-500"
          : choice === "scissors"
          ? "border-yellow-500"
          : "border-red-500"
      } button-style`}
    >
      <img className="p-[1.5rem] w-[6rem]" src={choiceMapping[choice].icon} />
    </div>
  );

      const emptyCircle = () => {
        <div className="bg-black rounded-[100%] w-[1rem] h-[1rem]"></div>
      }

  return (
    <div className="my-[7rem] gap-[2rem] flex flex-wrap justify-center">
      <div className="text-center">
        {userChoice && getUserChoiceElement(userChoice)}
        <p className="pt-[1rem] text-white">YOU PICKED</p>
      </div>
      <div className="text-center">
        <div>{computerChoice ? getUserChoiceElement(computerChoice) : emptyCircle() }</div>
        <p className="pt-[1rem] text-white">THE HOUSE PICKED</p>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-[3rem] font-bold">YOU WIN</h2>
        <button className="tracking-[0.15rem] text-[#3b4363] text-[0.9rem] bg-white mt-[0.5rem] px-[1rem] py-[0.6rem] rounded-[0.4rem]">PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default Round;
