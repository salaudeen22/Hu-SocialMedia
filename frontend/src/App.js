import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./screen/Auth";
import HomePage from "./screen/HomePage";
function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/Home" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
