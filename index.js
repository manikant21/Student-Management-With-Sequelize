import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db.config.js";
import Students from "./models/student.model.js";
import { router as studentRouter } from "./routes/student.route.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/students", studentRouter);


const PORT = process.env.PORT || 5000;

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running at ${PORT}`);
    });
}).catch((err) =>  {
    console.log(err);
})


