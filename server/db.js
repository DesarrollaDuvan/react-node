import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  database: "mern",
  user: "root",
  password: "",
});
