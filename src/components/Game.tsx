import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

const Game = () => {
  return (
    <div className="my-[7rem] gap-[2rem] flex flex-wrap justify-center bg-triangle-bg background-image w-[100%]">
      <div className="rounded-full border-[1rem] border-[#4865f4] bg-white w-fit">
        <img className="p-[1.5rem] w-[6rem]" src={Paper} />
      </div>
      <div className="rounded-full border-[1rem] border-[#ec9e0e] bg-white w-fit">
        <img className="p-[1.5rem] w-[6rem]" src={Scissors} />
      </div>
      <div className="rounded-full border-[1rem] border-[#dc2e4e] bg-white w-fit">
        <img className="p-[1.5rem] w-[6rem]" src={Rock} />
      </div>
    </div>
  );
};

export default Game;
