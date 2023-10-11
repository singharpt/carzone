import pool from "../model/connect.js";

const getLocations = async () => {
  const queryString = `SELECT * FROM ${process.env.LOCATION_TABLE}`;
  console.log(queryString);
  const response = await pool.query(queryString);
  return response;
};

const getEvents = async () => {
  const queryString = `SELECT * FROM ${process.env.EVENT_TABLE}`;
  const response = await pool.query(queryString);
  return response;
};

const getUniqueEvents = async (locationId) => {
  const queryString = `SELECT * FROM ${process.env.EVENT_TABLE} where location='${locationId}'`;
  const response = await pool.query(queryString);
  return response;
};

export default { getLocations, getEvents, getUniqueEvents };
