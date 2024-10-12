import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
const navigate=useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5555/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,  
          password: Password,
        }),
      });
 
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authtoken", data.token);
        localStorage.setItem("email", Email);
        console.log("Login Successful"); 
        navigate("/Home");
     
      } else {
     
        const errorData = await response.json();
        console.log("Login failed:", errorData.message || "Unknown error occurred");
      }
    } catch (error) {
      console.log("Error during login:", error); 
    }
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
