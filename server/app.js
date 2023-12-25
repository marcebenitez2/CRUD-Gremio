import express from "express";
import cors from "cors";
import loginRoute from "./routes/login.js";
import afiliadosRoute from "./routes/afiliados.js";
import empresasRoute from "./routes/empresas.js";


// Crear la aplicacion express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuracion de middlewares
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"]}));
app.use(express.json());

// Cada vez que se haga una consulta a "http://localhost:3000/" se llamara al enrutador para ver como se prosigue con lo que se solicita
app.use("/login", loginRoute);

// app.use('/afiliados',)
app.use("/afiliados", afiliadosRoute);

app.use("/empresas",empresasRoute)

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
