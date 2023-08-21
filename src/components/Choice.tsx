import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rock from "../assets/images/icon-rock.svg";

const Choice = ({ handleClick }) => {
  return (
    <section className="my-[7rem] gap-[1.7rem] flex flex-wrap justify-center bg-triangle-bg background-image w-[100%]">
      <div
        onClick={() => handleClick("paper")}
        className="button-style bg-gradient-paper border-b-[0.35rem] border-[#36479c]"
      >
        <div className="bg-white border-t-[5px] rounded-[100%]">
          <img className="p-[1.5rem] w-[100%]" src={Paper} />
        </div>
      </div>
      <div
        onClick={() => handleClick("scissors")}
        className=" bg-gradient-scissors border-b-[0.35rem] border-[#896728] button-style"
      >
        <div className="bg-white border-t-[5px] rounded-[100%]">
          <img className="p-[1.5rem] w-[100%]" src={Scissors} />
        </div>
      </div>
      <div
        onClick={() => handleClick("rock")}
        className="bg-gradient-rock border-b-[0.35rem] border-[#932c3f] button-style"
      >
        <div className="bg-white border-t-[5px] rounded-[100%]">
          <img className="p-[1.5rem] w-[100%]" src={Rock} />
        </div>
      </div>
    </section>
  );
};

export default Choice;
