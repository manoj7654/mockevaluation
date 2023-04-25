const express=require("express")
const flightRouter=express.Router();

const {FlightModal}=require("../modals/flightModal");


flightRouter.get("/f",(req,res)=>{
    res.send("hello from flights")
})


            // for finding flights


flightRouter.get("/flights",async(req,res)=>{
    const query=req.query
    try {
        const result=await FlightModal.find(query);
        res.send(result)
    } catch (error) {
        console.log(error)
        res.json("Something went wrong")
    }
})


                    //   for finding flight by id


flightRouter.get("/flights/:id",async(req,res)=>{
    const Id=req.params.id
    try {
        const result=await FlightModal.find({_id:Id});
        res.send(result)
    } catch (error) {
        console.log(error)
        res.json("Something went wrong")
    }
})
 

            //    add flight


flightRouter.post("/flights",async(req,res)=>{
    const payload=req.body;
    try {
        let flight=new FlightModal(payload);
        flight.save();
        res.json({"message":"Flight has been added"})
    } catch (error) {
        console.log(error)
        res.json({"message":"getting error posting data"})
    }
})



                // for updating flight


flightRouter.patch("/flights/:id",async(req,res)=>{
    const Id=req.params.id;
    const payload=req.body;
    try {
        await FlightModal.findByIdAndUpdate({_id:Id},payload);
    
        res.json({"message":"Flight has been updated"})
    } catch (error) {
        console.log(error)
        res.json({"message":"getting error updating data"})
    }
})


            //    for deleting flight


flightRouter.delete("/flights/:id",async(req,res)=>{
    const Id=req.params.id;
  
    try {
        await FlightModal.findByIdAndDelete({_id:Id});
    
        res.json({"message":"Flight has been deleted"})
    } catch (error) {
        console.log(error)
        res.json({"message":"getting error updating data"})
    }
})

module.exports={flightRouter}