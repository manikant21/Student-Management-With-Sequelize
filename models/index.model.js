import Students from "./student.model.js";
import IdentityCard from "./identityCard.model.js";
import Department from "./department.model.js";
import Courses from "./courses.model.js";
import studentCouses from "./studentCourses.model.js";

// one to one relation
Students.hasOne(IdentityCard, {
    foreignKey: "studentId",
    onDelete: "CASCADE"
  });
IdentityCard.belongsTo(Students, {
    foreignKey: "studentId"
  });
  
// one to many relation
Department.hasMany(Students, {
    foreignKey: "departmentId",
    onDelete: "CASCADE"
});

Students.belongsTo(Department, {
    foreignKey: "departmentId"
});

// many to many
Students.belongsToMany(Courses, {through: studentCouses});
Courses.belongsToMany(Students, {through: studentCouses});




export { Students, IdentityCard, Department, Courses, studentCouses };
