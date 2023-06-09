const mongoose=require("mongoose");


const flightSchema=mongoose.Schema(
    {
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: String,
        arrivalTime: String,
        seats: Number,
        price: Number
      }
)

const FlightModal=mongoose.model("flights",flightSchema);


module.exports={FlightModal}

