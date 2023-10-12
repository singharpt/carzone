import fetch from "../utilities/fetchWrapper";

const getAllInteriors = async () => {
  const requestInfo = { URL: "/api/interiors", method: "GET" };
  try {
    const response = await fetch(requestInfo);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
const getAllExteriors = async () => {
  const requestInfo = { URL: "/api/exteriors", method: "GET" };
  try {
    const response = await fetch(requestInfo);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
const getAllRoofs = async () => {
  const requestInfo = { URL: "/api/roofs", method: "GET" };
  try {
    const response = await fetch(requestInfo);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
const getAllWheels = async () => {
  const requestInfo = { URL: "/api/wheels", method: "GET" };
  try {
    const response = await fetch(requestInfo);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
const getAllCars = async () => {
  const requestInfo = { URL: "/api/getcars", method: "GET" };
  try {
    const response = await fetch(requestInfo);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default {
  getAllCars,
  getAllExteriors,
  getAllInteriors,
  getAllRoofs,
  getAllWheels,
};
