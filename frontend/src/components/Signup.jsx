import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BASE_URL from "../url";
function SignUp() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          email: Email,
          password: Password,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.log(
          "Something went wrong:",
          errorResponse.error || "Unknown error"
        );
        return;
      }

      const data = await response.json();
      // console.log("Register successful", data);
      Swal.fire({
        title: "Registeration Success!",

        icon: "success",
      });
      navigate("/auth");
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        title: "Error during registration !",
        text: `${error}`,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Name</label>
            <input
              name="Username"
              type="text"
              className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter Your name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input
              name="email"
              type="email"
              className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="!mt-12">
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
