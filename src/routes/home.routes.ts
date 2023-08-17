import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    message: "Welcome to Miso",
    author: "JuanCoder",
  });
});

export default router;
