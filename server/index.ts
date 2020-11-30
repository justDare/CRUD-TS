import "dotenv/config";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "routes";

const app: Application = express();
app.use(express.json({ limit: "50mb" }));

var corsOptions: {
  origin: string;
  optionsSuccessStatus: number;
} = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(routes, cors(corsOptions));

app.listen(8080, () => console.log("Job Dispatch API running on port 8080!"));
