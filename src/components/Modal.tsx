import rulesLogo from "../assets/images/image-rules.svg";

import { motion } from "framer-motion";

const Modal = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex justify-center bg-gradient-rule w-[94%] p-[1rem] 
          rounded-[2rem] absolute top-[28%] z-50 lg:w-[25rem] lg:p-[2.5rem]"
      >
        <img src={rulesLogo} alt="rules-button" />
      </motion.div>
    </>
  );
};

export default Modal;
