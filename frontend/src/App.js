import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./screen/Auth";
import HomePage from "./screen/HomePage";
import { ModalProvider } from "./Modal/ ModalContext";
function App() {
  return(

    <BrowserRouter>
     <ModalProvider>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
      </ModalProvider>
    </BrowserRouter>
);
}

export default App;
