import Students from "./student.model.js";
import IdentityCard from "./identityCard.model.js";
import Department from "./department.model.js";

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



export { Students, IdentityCard, Department};
