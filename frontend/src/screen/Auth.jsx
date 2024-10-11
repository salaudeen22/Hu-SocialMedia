import React, { useState } from "react";
import SignUp from "../components/Signup";
import Login from "../components/Login";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="h-screen w-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-4/5 md:w-1/3">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back! HUBX</h2>
        <div className="flex justify-evenly mb-4">
          <button
            type="button"
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out 
              ${!isSignIn ? "bg-gray-700 text-white shadow-lg hover:bg-slate-400" : "bg-slate-400 text-gray-700"}`}
            aria-pressed={!isSignIn}
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out 
              ${isSignIn ? "bg-gray-700 text-white shadow-lg hover:bg-slate-400" : "bg-slate-400 text-gray-700"}`}
            aria-pressed={isSignIn}
          >
            Login
          </button>
        </div>
        <div className="mt-4">{isSignIn ? <Login /> : <SignUp />}</div>
      </div>
    </div>
  );
}

export default Auth;
