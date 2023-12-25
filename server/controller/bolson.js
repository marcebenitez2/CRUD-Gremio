import bolsonModel from "../model/bolson.js";

const bolsonController = {
  findAll: async (req, res, next) => {
    try {
      const afiliados = await bolsonModel.findAll();
      res.json(afiliados);
    } catch (error) {
      next(error);
    }
  },
};

export default bolsonController;
