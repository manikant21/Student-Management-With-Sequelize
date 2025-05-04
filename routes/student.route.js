import { Router } from "express";
import { insertEntries, updateEntry, deleteEntry, getEntriesDetail, addValuetoStudentAndIdentityCardTable , addValuetoDepartmentAndStudentTable, getAllStudentsWithAssociations} from "../controllers/student.controller.js";


const router = Router();

router.post("/add", insertEntries);
router.put("/update/:id", updateEntry);
router.delete("/delete/:id", deleteEntry);
router.get("/", getEntriesDetail);
router.post("/addStudentWithID", addValuetoStudentAndIdentityCardTable);
router.post("/addDepartmentWithStudent", addValuetoDepartmentAndStudentTable);
router.get("/getAssociationData", getAllStudentsWithAssociations)



export {router};