import pool from "./connect.js";

const createCarzoneTables = async () => {
  const createInteriorsTableQuery = `
    DROP TABLE IF EXISTS ${process.env.INTERIOR_TABLE};

    CREATE TABLE IF NOT EXISTS ${process.env.INTERIOR_TABLE} (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL,
      iscombo BOOLEAN DEFAULT FALSE
    )
  `;

  const createExteriorsTableQuery = `
    DROP TABLE IF EXISTS ${process.env.EXTERIOR_TABLE};

    CREATE TABLE IF NOT EXISTS ${process.env.EXTERIOR_TABLE} (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL
    )
  `;

  const createWheelsTableQuery = `
    DROP TABLE IF EXISTS ${process.env.WHEELS_TABLE};

    CREATE TABLE IF NOT EXISTS ${process.env.WHEELS_TABLE} (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL
    )
  `;

  const createRoofsTableQuery = `
    DROP TABLE IF EXISTS ${process.env.ROOFS_TABLE};

    CREATE TABLE IF NOT EXISTS ${process.env.ROOFS_TABLE} (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL,
      isconvertible BOOLEAN DEFAULT FALSE
    )
  `;

  const createCarsTableQuery = `
    DROP TABLE IF EXISTS ${process.env.CARS_TABLE};

    CREATE TABLE IF NOT EXISTS ${process.env.CARS_TABLE} (
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
