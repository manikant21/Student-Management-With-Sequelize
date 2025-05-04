import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db.config.js";
// import Students from "./models/student.model.js";
import * as models from "./models/index.model.js";
import {router as courseRouter} from "./routes/courses.route.js"


import { router as studentRouter } from "./routes/student.route.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);


const PORT = process.env.PORT || 5000;

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running at ${PORT}`);
    });
}).catch((err) =>  {
    console.log(err);
})


