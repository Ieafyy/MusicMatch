import React from "react";
import { stagger, animate } from "framer-motion";

const ModalLateral = ({ showModal }) => {
  React.useEffect(() => {
    animate(
      "li",
      { x: [-300, 0] },
      { delay: stagger(0.1), duration: 0.6, ease: "backOut" }
    );
  }, [showModal]);

  return (
    <div className={`${showModal ? "box" : "hidden"} z-10 absolute`}>
      <ul className="flex-col inline-flex text-xl">
        <li className="text-white bg-cinza hover:text-black border-b-2 py-5 px-10 cursor-pointer">
          Sobre Nos
        </li>
        <li className="text-white bg-cinza hover:text-black border-b-2 py-5 px-10 cursor-pointer">
          Sobre Nos
        </li>
        <li className="text-white bg-cinza hover:text-black border-b-2 py-5 px-10 cursor-pointer">
          Sobre Nos
        </li>
        <li className="text-white bg-cinza hover:text-black border-b-2 py-5 px-10 cursor-pointer">
          Sobre Nos
        </li>
        <li className="text-white bg-cinza hover:text-black py-5 px-10 cursor-pointer">
          Sobre Nos
        </li>
      </ul>
    </div>
  );
};

export default ModalLateral;
