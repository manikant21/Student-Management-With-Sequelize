import { sequelize } from "../config/db.config.js";
import { Sequelize,DataTypes} from "sequelize";

const Department = sequelize.define('Department', {
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
})

export default Department;