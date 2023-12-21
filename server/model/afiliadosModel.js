import { pool } from "../db/db.js";

const afiliadosModel = {
  findAll: async () => {
    const [result] = await pool.query("SELECT members.*, companies.name AS company_name FROM members JOIN companies ON members.id_company = companies.id");
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
