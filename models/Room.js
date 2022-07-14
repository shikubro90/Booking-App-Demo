import mongoose from "mongoose";

const RoomSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    maxPeople : {
        type : Number,
        require : true
    },
    desc : {
        type : String,
        require : true
    },
    roomNumber : [{number: Number, unavailableDates: [{type : [Date]}]}],

}, {timestamps: true});

export default mongoose.model('Room',RoomSchema)