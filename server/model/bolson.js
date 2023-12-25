import { pool } from "../db/db.js";

const bolsonModel = {
  findAll: async () => {
    const query = `select members_christmas.id, members_christmas.id_members, members_christmas.submitted, members.name  from members_christmas join members on members_christmas.id_members = members.id`;

    const [result] = await pool.query(query);

    return result;
  },

};

export default bolsonModel;
