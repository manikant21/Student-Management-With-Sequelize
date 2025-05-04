import { sequelize } from "../config/db.config.js";
import { Sequelize,DataTypes} from "sequelize";

const  Courses = sequelize.define('Courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Courses;