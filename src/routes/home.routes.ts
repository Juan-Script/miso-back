import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    message: "Welcome to the BackEnd of Miso Woods",
    author: "Created by JuanCoder",
  });
});

export default router;
