import { pool } from "../db/db.js";

const empresasModel = {
  findAll: async () => {
    const [result] = await pool.query("SELECT * FROM companies");
    return result;
  },
  create: async (empresa) => {
    const result = await pool.query();
    return result;
  },
  update: async (empresa) => {
    const result = await pool.query();
    return result;
  },
  delete: async (empresa) => {
    const result = await pool.query();
    return result;
  },
};

export default empresasModel;