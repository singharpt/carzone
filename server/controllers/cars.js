import model from "../model/model.js";

const getAllCars = async (req, res) => {
  try {
    const response = await model.getCars();
    if (response.rowCount > 0) {
      res.status(200).json({ data: response.rows });
    } else {
      res.status(400).json({ data: [] });
    }
  } catch (error) {
    console.log(
      "Error while fetching all data from cars table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

const postCars = async (req, res) => {
  try {
    const carsData = req.body;
    const response = await model.postCars(carsData);
    //console.log(response);
    if (response.rowCount > 0) {
      res.status(200).json({ message: "Created new car successfully!" });
    } else {
      throw new Error("Failed to create car : ", response);
    }
  } catch (error) {
    console.log(
      "Error while fetching all data from cars table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

const patchCars = async (req, res) => {
  try {
    const carsData = req.body;
    const response = await model.patchCars(carsData);
    if (response.rowCount > 0) {
      res.status(200).json({ message: "Modified cars details successfully!" });
    } else {
      throw new Error("Failed to update car");
    }
  } catch (error) {
    console.log(
      "Error while updating target car data from cars table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

const deleteCars = async (req, res) => {
  try {
    const id = req.body.carId;
    console.log(id);
    const response = await model.deleteCars(id);
    if (response.rowCount > 0) {
      res
        .status(200)
        .json({ message: "Deleted target car details successfully!" });
    } else {
      throw new Error("Failed to delete car");
    }
  } catch (error) {
    console.log(
      "Error while delete target car from cars table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

export default { getAllCars, postCars, patchCars, deleteCars };
