import express from "express";
import route from "../Server/routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

export default app;
