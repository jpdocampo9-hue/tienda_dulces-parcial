import * as model from "../models/dulceModel.js";
import { ResumenTienda } from "../models/ResumenTienda.js";


export const getAll = async (req, res) => {
  try {
    const data = await model.getAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const getById = async (req, res) => {
  try {
    const data = await model.getById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Dulce no encontrado" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE
export const create = async (req, res) => {
  try {
    const data = await model.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const update = async (req, res) => {
  try {
    const data = await model.update(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({ message: "Dulce no encontrado" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const remove = async (req, res) => {
  try {
    const data = await model.remove(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Dulce no encontrado" });
    }

    res.status(200).json({ message: "Dulce eliminado", data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const resumen = async (req, res) => {
  try {
    const dulces = await model.getAll();

    const resumen = new ResumenTienda(dulces);

    const masEconomico = resumen.getMasEconomico();
    const masCostoso = resumen.getMasCostoso();

    res.status(200).json({
      totalDulces: dulces.length,
      stockTotal: resumen.getTotalStock(),
      masEconomico: {
        nombre: masEconomico.nombre,
        precio: masEconomico.precio
      },
      masCostoso: {
        nombre: masCostoso.nombre,
        precio: masCostoso.precio
      }
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};