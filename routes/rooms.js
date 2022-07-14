import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../Utils/VerifyToken.js';

const router = express.Router()

//createRoom
router.post("/:hotelid", verifyAdmin, createRoom);

//updateRoom
router.put("/id", verifyAdmin, updateRoom);

//deleteRoom
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//getRoom
router.get("/id",getRoom);

//getRooms
router.get("/",getRooms);


export default router;
