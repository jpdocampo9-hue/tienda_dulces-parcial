import dotenv from "dotenv";
import express from "express";

import categoriaRoutes from "./src/routes/categorias.js";
import dulceRoutes from "./src/routes/dulces.js";
import proveedorRoutes from "./src/routes/proveedores.js";

dotenv.config();

const app = express();
app.use(express.json());

// rutas
app.use("/api/categorias", categoriaRoutes);
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/dulces", dulceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});