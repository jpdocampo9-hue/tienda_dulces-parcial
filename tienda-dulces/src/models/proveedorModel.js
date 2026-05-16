import { pool } from "../config/db.js";

export const getAll = async () => {
  const res = await pool.query("SELECT * FROM proveedores");
  return res.rows;
};

export const getById = async (id) => {
  const res = await pool.query(
    "SELECT * FROM proveedores WHERE id=$1",
    [id]
  );
  return res.rows[0];
};

export const create = async (data) => {
  const res = await pool.query(
    "INSERT INTO proveedores(nombre, telefono, ciudad) VALUES ($1,$2,$3) RETURNING *",
    [data.nombre, data.telefono, data.ciudad]
  );
  return res.rows[0];
};

export const update = async (id, data) => {
  const res = await pool.query(
    "UPDATE proveedores SET nombre=$1, telefono=$2, ciudad=$3 WHERE id=$4 RETURNING *",
    [data.nombre, data.telefono, data.ciudad, id]
  );
  return res.rows[0];
};

export const remove = async (id) => {
  const res = await pool.query(
    "DELETE FROM proveedores WHERE id=$1 RETURNING *",
    [id]
  );
  return res.rows[0];
};