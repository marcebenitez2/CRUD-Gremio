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
}

export default empresasController;