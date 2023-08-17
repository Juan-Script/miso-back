import app from "./src/app";
import dotenv from "dotenv";
import "./src/database";

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 3000;

try {
  app.listen(PORT, () => {
    console.log(`Server Run on port: ${PORT}`);
  });
} catch (err) {
  console.error(err);
}
