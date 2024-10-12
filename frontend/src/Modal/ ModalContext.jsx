import React, { createContext, useState, useContext } from "react";


const ModalContext = createContext();


export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <ModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => {
  return useContext(ModalContext);
};
