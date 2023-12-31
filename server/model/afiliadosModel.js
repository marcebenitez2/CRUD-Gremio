import { pool } from "../db/db.js";

const afiliadosModel = {
  findAll: async () => {
    const query = `
      SELECT
        members.id, members.name, members.surname, members.dni, members.id_company, DATE_FORMAT(members.birth, '%Y-%m-%d') as birth, members.state,
        companies.name AS company_name
      FROM
        members
      JOIN
        companies ON members.id_company = companies.id ORDER BY members.id DESC;
    `;

    const [result] = await pool.query(query);

    // Modificar el valor de members.state en cada objeto del resultado
    const formattedResult = result.map((afiliado) => {
      return {
        ...afiliado,
        state: afiliado.state === 1, // Convertir 1 a true, 0 a false
      };
    });

    return formattedResult;
  },


  create: async (afiliado) => {
    const datos = [
      afiliado.name,
      afiliado.surname,
      afiliado.dni,
      afiliado.id_company,
      afiliado.birth,
      afiliado.state,
    ];
    const result = await pool.query(
      `INSERT INTO members (name, surname, dni, id_company, birth, state) VALUES (?,?,?,?,?,?)`,
      datos
    );
    return result;
  },

  
  update: async (afiliado, id) => {
    const result = await pool.query(
      `UPDATE members SET name = ?, surname = ?, dni = ?, id_company = ?, birth = ?, state = ? WHERE id = ?`,
      [
        afiliado.name,
        afiliado.surname,
        afiliado.dni,
        afiliado.id_company,
        afiliado.birth,
        afiliado.state,
        id,
      ]
    );
    return result;
  },
  delete: async (afiliado) => {
    const result = await pool.query(/* tu consulta de eliminación aquí */);
    return result;
  },
};

export default afiliadosModel;
