import { pool } from "../config/db.js";

export const getAll = async () => {
  const res = await pool.query("SELECT * FROM categorias");
  return res.rows;
};

export const getById = async (id) => {
  const res = await pool.query(
    "SELECT * FROM categorias WHERE id=$1",
    [id]
  );
  return res.rows[0];
};

export const create = async (data) => {
  const res = await pool.query(
    "INSERT INTO categorias(nombre, descripcion) VALUES ($1,$2) RETURNING *",
    [data.nombre, data.descripcion]
  );
  return res.rows[0];
};

export const update = async (id, data) => {
  const res = await pool.query(
    "UPDATE categorias SET nombre=$1, descripcion=$2 WHERE id=$3 RETURNING *",
    [data.nombre, data.descripcion, id]
  );
  return res.rows[0];
};

export const remove = async (id) => {
  const res = await pool.query(
    "DELETE FROM categorias WHERE id=$1 RETURNING *",
    [id]
  );
  return res.rows[0];
};