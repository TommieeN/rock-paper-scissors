import { AnimatePresence, motion } from "framer-motion"

import { useState } from "react";
import Modal from "./Modal";


const Rules = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {showModal ? "" :<motion.button
         initial={{ opacity: 0, scale: 0.5 }}
         whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
          onClick={handleModal}
          className="text-[0.9rem] text-center border rounded-md w-fit 
          text-white font-semibold px-[1.7rem] py-[0.3rem] tracking-[0.15rem]"
        >
          RULES
        </motion.button>}
        {showModal && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-40"
          onClick={handleModal}
        />
      )}
      <AnimatePresence>
        {showModal && <Modal />}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Rules;
