const UserModel = require("../Model/UserSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login Function
const Login = async (req, res) => {
  const { email, password } = req.body;

  
  if (!email || !password) {
    return res.status(400).send("All fields are required.");
  }

  try {
 
    const data = await UserModel.findOne({ email });
    if (!data) {
      return res.status(401).send("Email not found.");
    }

   
    const isTrue = await bcryptjs.compare(password, data.password); // correct order: (plainPassword, hashedPassword)
    if (!isTrue) {
      return res.status(401).send("Invalid credentials.");
    }

 
    const token = jwt.sign(
      { userId: data._id, email: data.email },
      process.env.JWTSECRET, 
      { expiresIn: "1h" }
    );

  
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// Signup Function
const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required.");
  }

  try {
   
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

 
    const userData = await UserModel.create({
      name,
      email,
      password: hashedPassword
    });

    if (!userData) {
      return res.status(500).send("Unable to create account.");
    }

    res.status(201).json({ message: "Signup successful", userData });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports = { Login, Signup };
