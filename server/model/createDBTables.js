import pool from "./connect.js";

const createCarzoneTables = async () => {
  const createInteriorsTableQuery = `
    DROP TABLE IF EXISTS interiors;

    CREATE TABLE IF NOT EXISTS interiors (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL,
      iscombo BOOLEAN DEFAULT FALSE
    )
  `;

  const createExteriorsTableQuery = `
    DROP TABLE IF EXISTS exteriors;

    CREATE TABLE IF NOT EXISTS exteriors (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL
    )
  `;

  const createWheelsTableQuery = `
    DROP TABLE IF EXISTS wheels;

    CREATE TABLE IF NOT EXISTS wheels (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL
    )
  `;

  const createRoofsTableQuery = `
    DROP TABLE IF EXISTS roofs;

    CREATE TABLE IF NOT EXISTS roofs (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL,
      isconvertible BOOLEAN DEFAULT FALSE
    )
  `;

  const createCarsTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      exterior INTEGER,
      interior INTEGER,
      roof INTEGER,
      wheel INTEGER,
      price INTEGER NOT NULL,
      isconvertible BOOLEAN DEFAULT FALSE
    )
  `;

  try {
    await pool.query(createInteriorsTableQuery);
    await pool.query(createExteriorsTableQuery);
    await pool.query(createWheelsTableQuery);
    await pool.query(createRoofsTableQuery);
    await pool.query(createCarsTableQuery);
    console.log("🎉 All tables created successfully");
  } catch (err) {
    console.error("⚠️ error creating tables in DB", err);
  }
};

export default createCarzoneTables;
