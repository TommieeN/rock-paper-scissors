import { motion } from "framer-motion"

import rulesLogo from "../assets/images/image-rules.svg";

const Modal = () => {
  return (
    <>
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
      </>
  )
}

export default Modal