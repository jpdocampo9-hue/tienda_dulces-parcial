import { pool } from "../config/db.js";

export const getAll = async () => {
  const res = await pool.query(`
    SELECT d.id, d.nombre, d.precio, d.stock,
           c.nombre AS categoria,
           p.nombre AS proveedor
    FROM dulces d
    JOIN categorias c ON d.categoria_id = c.id
    JOIN proveedores p ON d.proveedor_id = p.id
  `);

  return res.rows;
};

export const getById = async (id) => {
  const res = await pool.query(`
    SELECT d.id, d.nombre, d.precio, d.stock,
           c.nombre AS categoria,
           p.nombre AS proveedor
    FROM dulces d
    JOIN categorias c ON d.categoria_id = c.id
    JOIN proveedores p ON d.proveedor_id = p.id
    WHERE d.id=$1
  `, [id]);

  return res.rows[0];
};

export const create = async (data) => {
  const res = await pool.query(
    `INSERT INTO dulces(nombre, precio, stock, categoria_id, proveedor_id)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`,
    [
      data.nombre,
      data.precio,
      data.stock,
      data.categoria_id,
      data.proveedor_id
    ]
  );

  return res.rows[0];
};

export const update = async (id, data) => {
  const res = await pool.query(
    `UPDATE dulces
     SET nombre=$1, precio=$2, stock=$3, categoria_id=$4, proveedor_id=$5
     WHERE id=$6
     RETURNING *`,
    [
      data.nombre,
      data.precio,
      data.stock,
      data.categoria_id,
      data.proveedor_id,
      id
    ]
  );

  return res.rows[0];
};

export const remove = async (id) => {
  const res = await pool.query(
    "DELETE FROM dulces WHERE id=$1 RETURNING *",
    [id]
  );

  return res.rows[0];
};