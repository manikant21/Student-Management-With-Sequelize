import { sequelize } from "../config/db.config.js";
import { Sequelize,DataTypes} from "sequelize";

const studentCouses = sequelize.define('studentCourses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});


export default studentCouses;