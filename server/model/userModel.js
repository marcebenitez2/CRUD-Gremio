import { pool } from "../db/db.js";

const userModel = {
  findByEmailAndPasword: async (email, password) => {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );
    console.log(result[0]);
    return result[0];
  },
};

export default userModel;
