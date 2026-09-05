import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("hello world");
});

app.listen(PORT, () => {
  console.log(`the server is running at port : ${PORT}`);
});
