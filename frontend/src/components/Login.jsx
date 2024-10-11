import React, { useState } from "react";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className="space-y-6">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
          <input
            name="email"
            type="text"
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
          <input
            name="password"
            type="password"
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="!mt-12">
        <button
          type="button"
          className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
