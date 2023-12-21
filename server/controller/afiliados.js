import afiliadosModel from "../model/afiliadosModel.js";

const afiliadosController = {
  findAll: async (req, res, next) => {
    try {
      const afiliados = await afiliadosModel.findAll();
      res.json(afiliados);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const afiliado = req.body;
      const result = await afiliadosModel.create(afiliado);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const afiliado = req.body;
      const result = await afiliadosModel.update(afiliado);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const afiliado = req.body;
      const result = await afiliadosModel.delete(afiliado);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

export default afiliadosController;