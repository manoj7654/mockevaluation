const express=require("express");
const bookingRouter=express.Router();

const {BookingModal}=require("../modals/bookingModal")



bookingRouter.get("/",(req,res)=>{
    res.send("hello from bookings")
})

bookingRouter.post("/booking",async(req,res)=>{
    const payload=req.body;
    try {
        let book=new BookingModal(payload);
        await book.save()
        res.json("Booking done")
    } catch (error) {
        console.log(error)
    }
})

module.exports={bookingRouter}