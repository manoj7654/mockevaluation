
        // for user routes
const express=require("express");
const userRouter=express.Router();

        //  importing Usermodal
const {Usermodal}=require("../modals/userModal")

    //    for hashing password
const bcrypt=require("bcrypt")

require("dotenv").config()

const jwt=require("jsonwebtoken")

userRouter.get("/",(req,res)=>{
    res.send("hello from users")
})



                // user register

                
userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body

     let result=await Usermodal.find({email});
     if(result.length>0){
        return res.json("User already registered")
     }

     try {
        bcrypt.hash(password,5,async(err,secure_password)=>{
            if(err){
                console.log(err)
            }else{
                const user=new Usermodal({name,email,password:secure_password})
                await user.save()
                res.status(201).json({"message":"User registered"})
            }
        })
       
     } catch (error) {
        console.log(error)
        res.status(400).json({"message":"while posting data there are some issue"})
     }

})


                //   User login

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        let user=await Usermodal.find({email});
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userID:user[0]._id},process.env.key)
                    res.cookie("token",token)
                    res.status(201).send({"message":"User login successfull"})
                }else{
                    res.json("Wrong credential")
                }
            })

        }else{
            res.json("Wrond credential")
        }
    } catch (error) {
        console.log(error)
        console.log({"message":"Getting problem while logging"})
        
    }
})

module.exports={userRouter}

