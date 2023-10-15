import fetch from "../utilities/fetchWrapper";

const deleteCars = async (carInfo) => {
  const requestInfo = {
    URL: "/api/deletecars",
    method: "DELETE",
    POSTDATA: carInfo,
  };
  try {
    return await fetch(requestInfo);
  } catch (err) {
    console.error(err);
    return err;
  }
};
const updateCars = async (carInfo) => {
  const requestInfo = {
    URL: "/api/patchcars",
    method: "PATCH",
    POSTDATA: carInfo,
  };
  try {
    return await fetch(requestInfo);
  } catch (err) {
    console.error(err);
    return err;
  }
};
const createCars = async (carInfo) => {
  const requestInfo = {
    URL: "/api/createcars",
    method: "POST",
    POSTDATA: carInfo,
  };
  try {
    return await fetch(requestInfo);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default {
  createCars,
  updateCars,
  deleteCars,
};
