import React from "react";
import { stagger, animate } from "framer-motion";

const ModalLateral = ({ showModal, setAnimating }) => {
  const menu = React.useRef();

  React.useEffect(() => {
    if (showModal) {
      setAnimating(true);
      menu.current.style.display = "block";
      animate(
        "li",
        { x: [-300, 0] },
        { delay: stagger(0.1), duration: 0.6, ease: "backOut" }
      ).then(() => setAnimating(false));
    } else {
      setAnimating(true);
      animate(
        "li",
        { x: [0, -300] },
        { delay: stagger(0.1), duration: 0.6, ease: "backIn" }
      ).then(() => {
        menu.current.style.display = "none";
        setAnimating(false);
      });
    }
  }, [showModal]);

  return (
    <div className={`z-10 absolute hidden`} ref={menu}>
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
