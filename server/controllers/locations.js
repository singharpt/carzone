import model from "../model/model.js";

const locations = async (req, res) => {
  try {
    const response = await model.getLocations();
    if (response.rowCount > 0) {
      res.status(200).json({ data: response.rows });
    } else {
      res.status(400).json({ data: [] });
    }
  } catch (error) {
    console.log(
      "Error while fetching all data from locations table in Postgres DB ",
      error
    );
    res.status(400).json({ error: error });
  }
};

export default locations;
