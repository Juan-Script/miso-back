// Lib
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Import Routes
import homeRouter from "./routes/home.routes";
import productRouter from "./routes/products.routes";

// Config
const app = express();
app.use(morgan("dev"));
app.use(express.json()); // middleware que transforma la req.body a un json

// Cors
app.use(cors());

// Routes
app.use("/", homeRouter);
app.use("/products", productRouter);

export default app;
