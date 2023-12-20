import { createPool } from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from "./config.js";

// export const pool = createPool({
//   user: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   database: DB_NAME,
//   port: DB_PORT,
// });

export const pool = createPool({
  user: "root",
  password: "",
  host: "localhost",
  database: "gremio",
  port: 3306,
});
