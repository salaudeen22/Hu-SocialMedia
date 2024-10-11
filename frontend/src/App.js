import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./screen/Auth";
function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
