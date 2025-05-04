import { sequelize } from "../config/db.config.js";
import { Sequelize,DataTypes} from "sequelize";

const IdentityCard = sequelize.define('IdentityCard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    } 
})

export default IdentityCard;
