import userModel from "../model/userModel.js";

const loginController = {
  login: async (req, res,next) => {
    try {
      const { email, password } = req.body;

      console.log(email, password)
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      const user = await userModel.findByEmailAndPasword(email, password);

      if (!user) {
        throw new Error("Invalid credentials");
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  },
};

export default loginController;
