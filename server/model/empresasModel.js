import { pool } from "../db/db.js";

const empresasModel = {
  findAll: async () => {
    const [result] = await pool.query("SELECT * FROM companies");
    return result;
  },

  create: async (empresa) => {
    const datos = Object.values(empresa);
    console.log(datos);
    const result = await pool.query(
      "INSERT INTO companies (name, address, tel, email, num_idem) VALUES (?,?,?,?,?)",
      datos
    );
    return result;
  },

  update: async (empresa, id) => {
    const datos = [
      empresa.name,
      empresa.address,
      empresa.tel,
      empresa.email,
      empresa.num_idem,
      id,
    ];
    const result = await pool.query(
      "UPDATE companies SET name = ?, address = ?, tel = ?, email = ?, num_idem = ? WHERE id = ?",
      datos
    );
    return result;
  },
  delete: async (empresa) => {
    const result = await pool.query();
    return result;
  },
};

export default empresasModel;
