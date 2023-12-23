import empresasModel from "../model/empresasModel.js";

const empresasController = {
  findAll: async (req, res, next) => {
    try {
      const empresas = await empresasModel.findAll();
      res.json(empresas);
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const empresa = await empresasModel.create(req.body);
      res.json(empresa);
    } catch (error) {
      next(error);
    }
  },

  editById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const empresa = req.body;
      const result = await empresasModel.update(empresa, id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

export default empresasController;
