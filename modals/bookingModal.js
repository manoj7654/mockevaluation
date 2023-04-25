const mongoose=require("mongoose");

const bookingSchema=mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,refer:"User"},
    flight:{type:mongoose.Schema.Types.ObjectId,refer:"Flight"}
})

const BookingModal=mongoose.model("bookings",bookingSchema);


module.exports={BookingModal}