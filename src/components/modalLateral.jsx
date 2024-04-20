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
    <div className={showModal ? "box" : "hidden"}>
      <ul className="flex flex-col">
        <li>Sobre Nos</li>
        <li>Sobre Nos</li>
        <li>Sobre Nos</li>
        <li>Sobre Nos</li>
        <li>Sobre Nos</li>
      </ul>
    </div>
  );
};

export default ModalLateral;
