const express=require("express");
const PORT = process.env.PORT || 5555;
const Connect=require("./Connect");
const auth=require("./Router/auth");
const dotenv = require('dotenv')
const cors=require("cors");
const PostController=require("./Controller/PostController")
const corsOptions = {
  origin: '*',
    optionsSuccessStatus: 200, 
  };
const app=express();
dotenv.config();
Connect();


 
app.use(cors(corsOptions));
app.use(express.json());
app.use("/test",(req,res)=>
{
    res.send("hello Hubx");
})
app.use("/auth",auth);

app.use("/api",PostController);

app.listen(PORT,()=>
{
    console.log("Listensing at");
    console.log(`http://localhost:${PORT}`);

})