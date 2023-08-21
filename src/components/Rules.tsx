import { AnimatePresence } from "framer-motion"

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
        {showModal && <Modal />}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Rules;
