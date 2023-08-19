import rulesLogo from "../assets/images/image-rules.svg";
import { AnimatePresence, motion } from "framer-motion"

import { useState } from "react";
const Rules = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {showModal ? "" :<button
          onClick={handleModal}
          className="text-[0.9rem] text-center border rounded-md w-fit 
          text-white font-semibold px-[1.7rem] py-[0.3rem] tracking-[0.15rem]"
        >
          RULES
        </button>}
        {showModal && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-40"
          onClick={handleModal}
        />
      )}
      <AnimatePresence>
        {showModal && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          exit={{ scale: 0, rotate: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="bg-gradient-rule w-[94%] p-[1rem] rounded-[2rem] absolute top-[28%] left-[3%] z-50"
        >
          <img src={rulesLogo} alt="rules-button" />
        </motion.div>
      )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Rules;
