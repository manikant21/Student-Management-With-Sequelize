import { Router } from "express";
import { insertEntries, updateEntry, deleteEntry, getEntriesDetail } from "../controllers/student.controller.js";


const router = Router();

router.post("/add", insertEntries);
router.put("/update/:id", updateEntry);
router.delete("/delete/:id", deleteEntry);
router.get("/", getEntriesDetail);



export {router};