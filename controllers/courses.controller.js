import {Courses, Students } from "../models/index.model.js";


export const addCourses = async (req, res) => {
    try {
        const {name} = req.body;
        const course = await Courses.create({
            name: name
        })
        return res.status(201).json({course});
    } catch (error) {
        console.log(err);
        return res.status(500).json({ "msg": "Unable to add entry in database" });
    }
}

export const addStudentToCourse = async (req, res) => {
    try {
        const {studentId, courseIds} = req.body;
        const student = await Students.findByPk(studentId);
        const course = await Courses.findAll({
            where:{
                id: courseIds
            }
        })
        await student.addCourses(course);
        const updatedStudent = await Students.findByPk(studentId, {include: Courses});
        return res.status(200).json({updatedStudent});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "msg": "Unable to add entry in database" });
    }
}