import rulesLogo from "../assets/images/image-rules.svg";
import exitLogo from "../assets/images/icon-close.svg"

import { useEffect, useState } from "react";
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
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={handleModal}
        />
      )}
        <div>
          {showModal && (
            <img
              className="bg-gradient-rule w-[94%] p-[1rem] rounded-lg  absolute top-[28%] left-[3%] z-50"
              src={rulesLogo}
              alt="rules-button"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Rules;
