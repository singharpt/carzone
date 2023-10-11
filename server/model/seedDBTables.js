import pool from "./connect.js";
import carzoneData from "./data.js";

const seedInteriorsTable = async () => {
  carzoneData.interiors.forEach((interior) => {
    const insertQuery = {
      text: "INSERT INTO interiors (id, color, image, price, iscombo) VALUES ($1, $2, $3, $4, $5)",
    };

    const values = [
      interior.id,
      interior.color,
      interior.image,
      interior.price,
      interior.iscombo,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting in table interiors", err);
        return;
      }
      console.log(`✅ ${interior.color} added successfully`);
    });
  });
};

const seedExteriorsTable = async () => {
  carzoneData.exteriors.forEach((exterior) => {
    const insertQuery = {
      text: "INSERT INTO exteriors (id, color, image, price) VALUES ($1, $2, $3, $4)",
    };

    const values = [
      exterior.id,
      exterior.color,
      exterior.image,
      exterior.price,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting in table exteriors", err);
        return;
      }
      console.log(`✅ ${exterior.color} added successfully`);
    });
  });
};

const seedWheelsTable = async () => {
  carzoneData.wheels.forEach((wheel) => {
    const insertQuery = {
      text: "INSERT INTO wheels (id, color, image, price) VALUES ($1, $2, $3, $4)",
    };

    const values = [wheel.id, wheel.color, wheel.image, wheel.price];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting in table wheels", err);
        return;
      }
      console.log(`✅ ${wheel.color} added successfully`);
    });
  });
};

const seedRoofsTable = async () => {
  carzoneData.roofs.forEach((roof) => {
    const insertQuery = {
      text: "INSERT INTO roofs (id, color, image, price, isconvertible) VALUES ($1, $2, $3, $4, $5)",
    };

    const values = [
      roof.id,
      roof.color,
      roof.image,
      roof.price,
      roof.isconvertible,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting in table roofs", err);
        return;
      }
      console.log(`✅ ${roof.color} added successfully`);
    });
  });
};

const seedCarsTable = async () => {
  carzoneData.cars.forEach((car) => {
    const insertQuery = {
      text: "INSERT INTO cars (id, name, exterior, interior, roof, wheel, price, isconvertible) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    };

    const values = [
      car.id,
      car.name,
      car.exterior,
      car.interior,
      car.roof,
      car.wheels,
      car.price,
      car.isconvertible,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting in table cars", err);
        return;
      }
      console.log(`✅ ${car.name} added successfully`);
    });
  });
};

export default {
  seedCarsTable,
  seedExteriorsTable,
  seedInteriorsTable,
  seedRoofsTable,
  seedWheelsTable,
};
