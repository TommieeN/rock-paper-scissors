import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

const Choice = ({ handleClick }) => {
  return (
    <div className="my-[7rem] gap-[2rem] flex flex-wrap justify-center bg-triangle-bg background-image w-[100%]">
      <button
        onClick={() => handleClick("paper")}
        className="border-[1rem] border-[#4865f4] button-style"
      >
        <img className="p-[1.5rem] w-[6rem]" src={Paper} />
      </button>
      <button
        onClick={() => handleClick("scissors")}
        className="border-[1rem] border-[#ec9e0e] button-style"
      >
        <img className="p-[1.5rem] w-[6rem]" src={Scissors} />
      </button>
      <button
        onClick={() => handleClick("rock")}
        className="border-[1rem] border-[#dc2e4e] button-style"
      >
        <img className="p-[1.5rem] w-[6rem]" src={Rock} />
      </button>
    </div>
  );
};

export default Choice;
