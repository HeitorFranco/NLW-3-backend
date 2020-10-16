import "dotenv/config";
import express from "express";
import path from "path";
import "express-async-errors";

import cors from "cors";

const app = express();

import "./database/connection";

import routes from "./routes";
import errorhandler from "./errors/handler";

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorhandler);

app.listen(process.env.PORT || 3333);
