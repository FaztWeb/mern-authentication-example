import express from "express";
import userRoutes from "./routes/user.routes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(userRoutes);

export default app;
