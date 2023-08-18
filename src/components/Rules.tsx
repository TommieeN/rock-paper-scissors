import rulesLogo from "../assets/images/image-rules.svg";

const Rules = () => {
  return (
    <>
    <div className="flex flex-col items-center pb-[5rem]">
      <h2 className="text-[0.9rem] text-center border rounded-md w-fit text-white font-semibold px-[1.7rem] py-[0.3rem]">R U L E S</h2>
        
    </div>
    <img src={rulesLogo} />
    </>
  )
}

export default Rules