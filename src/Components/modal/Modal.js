import React from "react";
import { ModalStyled } from "./ModalStyled";
const Modal = ({ close, suumary }) => {
  return (
    <>
      <ModalStyled>
        <div className="Overlay">
          <div className="Modal">
            <p className="suumary"> {suumary}</p>
            <button onClick={close}>close</button>
          </div>
        </div>
      </ModalStyled>
    </>
  );
};

export default Modal;
