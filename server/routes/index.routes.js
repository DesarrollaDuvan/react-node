import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT * FROM cliente");
  console.log(result)
  console.log("ping");
});

export default router;
