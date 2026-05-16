import * as model from "../models/proveedorModel.js";

// GET ALL
export const getAll = async (req, res) => {
  try {
    const data = await model.getAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET BY ID
export const getById = async (req, res) => {
  try {
    const data = await model.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "No encontrado" });
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

// UPDATE
export const update = async (req, res) => {
  try {
    const data = await model.update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const remove = async (req, res) => {
  try {
    const data = await model.remove(req.params.id);
    res.status(200).json({ message: "Eliminado", data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};