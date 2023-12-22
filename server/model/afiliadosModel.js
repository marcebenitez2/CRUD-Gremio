import { pool } from "../db/db.js";

const afiliadosModel = {
  findAll: async () => {
    const query = `
      SELECT
        members.id, members.name, members.surname, members.dni, members.id_company, DATE_FORMAT(members.birth, '%d/%m/%Y') as birth, members.state,
        companies.name AS company_name
      FROM
        members
      JOIN
        companies ON members.id_company = companies.id;
    `;

    const [result] = await pool.query(query);

    // Modificar el valor de members.state en cada objeto del resultado
    const formattedResult = result.map((afiliado) => {
      return {
        ...afiliado,
        state: afiliado.state === 1, // Convertir 1 a true, 0 a false
      };
    });

    console.log(formattedResult);
    return formattedResult;
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
