const mongosse=require("mongoose");
const connect=()=>
{
    try {
        const data=mongosse.connect(process.env.uri);
        console.log("connected to database");

        
    } catch (error) {
        console.log(error);

        
    }
}
module.exports=connect;