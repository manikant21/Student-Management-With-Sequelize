import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db.config.js";
import Students from "./models/student.model.js";


dotenv.config();

const app = express();


const PORT = process.env.PORT || 5000;

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running at ${PORT}`);
    });
}).catch((err) =>  {
    console.log(err);
})


