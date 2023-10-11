import model from "../model/model.js";

const getAllEvents = async (req, res) => {
  try {
    const response = await model.getEvents();
    if (response.rowCount > 0) {
      res.status(200).json({ data: response.rows });
    } else {
      res.status(400).json({ data: [] });
    }
  } catch (error) {
    console.log(
      "Error while fetching all data from events table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

const getUniqueEvents = async (req, res) => {
  try {
    const locationId = req.params.locationId;
    const response = await model.getUniqueEvents(locationId);
    if (response.rowCount > 0) {
      res.status(200).json({ data: response.rows });
    } else {
      res.status(400).json({ data: [] });
    }
  } catch (error) {
    console.log(
      "Error while fetching unique data from events table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

export default { getAllEvents, getUniqueEvents };
