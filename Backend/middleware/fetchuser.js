const jwt= require('jsonwebtoken');
const dotenv=require ('dotenv');
// reads the .env file and loads the variables into process .env 
dotenv.config(); 

const fetchuser=(req,res,next)=>{
      const token=req.header('auth-token');
      if(!token){
        return res.status(401).send({error:"Please authenticate using a valid token"});
      }
      try{
        const data=jwt.verify(token, process.env.secretkey);
        req.user=data;
        
        next();

      }catch(err){
        console.error(err.message);
        res.status(500).send("Please authentificate using a valid token");
      }

}

module.exports=fetchuser