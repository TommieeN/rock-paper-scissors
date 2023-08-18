import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
        <div className="flex justify-between items-center p-[0.5rem] border-2 rounded-xl border-solid border-border-primary">
          <img className="w-[40%] pl-[0.5rem]" src={Logo} alt="rock-paper-scissors-logo" />
        <div className="text-center bg-white rounded-md items-center justify-center py-[0.3rem] px-[1.3rem]">
          <p className="text-[#2a46c0] text-[0.7rem]">SCORE</p>
          <p className="text-[#3b4363] text-[2rem] font-bold">12</p>
        </div>
      </div>
    </div>
  )
}

export default Header