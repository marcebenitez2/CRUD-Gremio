import { pool } from "../db/db.js";

const afiliadosModel = {
  findAll: async () => {
    const result = await pool.query("SELECT * FROM afiliados");
    return result;
  },
  create: async (afiliado) => {
    const result = await pool.query();
    return result;
  },
  update: async (afiliado) => {
    const result = await pool.query();
    return result;
  },
  delete: async (afiliado) => {
    const result = await pool.query();
    return result;
  },
};

export default afiliadosModel;
