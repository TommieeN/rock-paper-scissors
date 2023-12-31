import Logo from "../assets/images/logo.svg";

import { motion } from "framer-motion";

const Header = ({ score }: { score: number }) => {
  return (
    <div className="sm:flex sm:items-center sm:justify-center">
      <div className="lg:justify-center lg:items-center lg:flex">
        <div
          className="flex justify-between items-center p-[0.5rem] 
        border-2 rounded-xl border-solid border-border-primary sm:w-[20rem] lg:w-[40rem]"
        >
          <img
            className="w-[40%] pl-[0.5rem] lg:w-[12rem]"
            src={Logo}
            alt="rock-paper-scissors-logo"
          />
          <div className="text-center bg-white rounded-md items-center justify-center py-[0.3rem] px-[1.3rem] lg:py-[1rem] lg:px-[2.5rem] lg:m-[1rem]">
            <p className="text-[#2a46c0] text-[0.7rem] lg:text-[1.4rem]">
              SCORE
            </p>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="text-[#3b4363] text-[2rem] font-bold lg:text-[2.5rem]"
            >
              {score}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
