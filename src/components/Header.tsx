import Logo from "../assets/images/logo.svg";

const Header = ({ score }) => {
  return (
    <div className="lg:justify-center lg:items-center lg:flex">
      <div
        className="flex justify-between items-center p-[0.5rem] 
        border-2 rounded-xl border-solid border-border-primary lg:w-[40rem]"
      >
        <img
          className="w-[40%] pl-[0.5rem] lg:w-[12rem]"
          src={Logo}
          alt="rock-paper-scissors-logo"
        />
        <div className="text-center bg-white rounded-md items-center justify-center py-[0.3rem] px-[1.3rem] lg:py-[1rem] lg:px-[2.5rem] lg:m-[1rem]">
          <p className="text-[#2a46c0] text-[0.7rem] lg:text-[1.4rem]">SCORE</p>
          <p className="text-[#3b4363] text-[2rem] font-bold lg:text-[2.5rem]">{score}</p>
        </div>
      </div>
      </div>
  );
};

export default Header;
