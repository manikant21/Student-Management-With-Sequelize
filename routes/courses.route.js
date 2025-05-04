import { Router } from "express";
import { addCourses, addStudentToCourse } from "../controllers/courses.controller.js";


const router = Router();
router.post("/add", addCourses);
router.get("/addStudentCourses", addStudentToCourse)

export {router};