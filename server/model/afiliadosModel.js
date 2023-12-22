import { pool } from "../db/db.js";

const afiliadosModel = {
  findAll: async () => {
    const query = `
      SELECT
        members.id, members.name, members.surname, members.dni, members.id_company, DATE_FORMAT(members.birth, '%d/%m/%Y') as birth,
        companies.name AS company_name
      FROM
        members
      JOIN
        companies ON members.id_company = companies.id;
    `;

    const [result] = await pool.query(query);

    console.log(result)
    return result;
  },
  create: async (afiliado) => {
    const result = await pool.query(/* tu consulta de creación aquí */);
    return result;
  },
  update: async (afiliado) => {
    const result = await pool.query(/* tu consulta de actualización aquí */);
    return result;
  },
  delete: async (afiliado) => {
    const result = await pool.query(/* tu consulta de eliminación aquí */);
    return result;
  },
};

export default afiliadosModel;
