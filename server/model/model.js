import pool from "../model/connect.js";

const getInteriors = async () => {
  const queryString = `SELECT * FROM ${process.env.INTERIOR_TABLE}`;
  console.log(queryString);
  const response = await pool.query(queryString);
  return response;
};

const getExteriors = async () => {
  const queryString = `SELECT * FROM ${process.env.EXTERIOR_TABLE}`;
  console.log(queryString);
  const response = await pool.query(queryString);
  return response;
};

const getWheels = async () => {
  const queryString = `SELECT * FROM ${process.env.WHEELS_TABLE}`;
  console.log(queryString);
  const response = await pool.query(queryString);
  return response;
};

const getRoofs = async () => {
  const queryString = `SELECT * FROM ${process.env.ROOFS_TABLE}`;
  const response = await pool.query(queryString);
  return response;
};

const getCars = async () => {
  const queryString = `SELECT * FROM ${process.env.CARS_TABLE}`;
  const response = await pool.query(queryString);
  return response;
};

const postCars = async (carsData) => {
  const insertQuery = {
    text: `INSERT INTO ${process.env.CARS_TABLE} (name, exterior, interior, roof, wheel, price, isconvertible) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
  };

  const values = [
    carsData.name,
    carsData.exterior,
    carsData.interior,
    carsData.roof,
    carsData.wheel,
    carsData.price,
    carsData.isconvertible,
  ];

  const response = await pool.query(insertQuery, values);
  console.log(response);
  return response;
};

const patchCars = async (carsData) => {
  const updateQuery = {
    text: `UPDATE ${process.env.CARS_TABLE} SET name=$1, exterior=$2, interior=$3, roof=$4, wheel=$5, price=$6, isconvertible=$7 WHERE id=$8`,
  };

  const values = [
    carsData.name,
    carsData.exterior,
    carsData.interior,
    carsData.roof,
    carsData.wheel,
    carsData.price,
    carsData.isconvertible,
    carsData.id,
  ];

  const response = await pool.query(updateQuery, values);
  return response;
};

const deleteCars = async (id) => {
  const deleteString = `DELETE FROM ${process.env.CARS_TABLE} WHERE id=$1`;
  const response = await pool.query(deleteString, [id]);
  return response;
};

export default {
  getInteriors,
  getExteriors,
  getWheels,
  getRoofs,
  getCars,
  postCars,
  patchCars,
  deleteCars,
};
