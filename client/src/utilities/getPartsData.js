const getUniquePartsData = (array, id) => {
  if (array.length > 0) {
    return array.find((item) => item.id == id);
  }
  return [];
};

export default getUniquePartsData;
