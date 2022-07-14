import Hotel from "../models/Hotel.js"


//Create
export const createHotel = async (req,res,next)=>{
    
    const newHotel = new Hotel(req.body);
    
    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }catch(err){
        next(err)
    }
}

//Update
export const updateHotel = async (req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateHotel)

    }catch(err){
        next(err)
    }
}

//Delete
export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("updateHotel");
    }catch(err){
        next(err)
    }
}

// Get
export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

//Get All
export const getAllHotel = async (req,res,next)=>{

    const {min, max, ...others} = req.query;

    try{
        const hotels = await Hotel.find(req.query).limit(req.query.limit)
        // const hotels = await Hotel.find({...others, cheapestPrice:{$gt : min | 1, $lt: max || 999}}).limit(req.query.limit);
        res.status(200).json(hotels)
    }
    catch(err){
        next(err)
    }
}

//Count by city
export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(","); 
    try{
        const list = await Promise.all(cities.map((city)=>{
            return(
                Hotel.countDocuments({city:city})
            )
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}

//Count by type
export const countType = async (req,res,next)=>{
    try{
        const hotelCount = await Hotel.countDocuments({type: "hotel"});
        const apartmentsCount = await Hotel.countDocuments({type: "apartment"})
        const resortCount = await Hotel.countDocuments({type: "resort"})
        const villaCount = await Hotel.countDocuments({type: "villa"})
        const cabinCount = await Hotel.countDocuments({type: "cabin"})
        
        res.status(200).json([
            {type : "hotel", count : hotelCount},
            {type : "apartment", count : apartmentsCount},
            {type: "resort", count : resortCount},
            {type : "villa", count : villaCount},
            {type : "cabin", count : cabinCount}
        ]);
    }catch(err){
        next(err)
    }
}