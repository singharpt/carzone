import "../css/Cars.css";

const Cars = (carInfo) => {
  return (
    <article className="car-information">
      <div>
        <div>
          <h3>{carInfo.name}</h3>
          <h3>{carInfo.interior}</h3>
          <h3>{carInfo.wheel}</h3>
          <h3>{carInfo.roof}</h3>
          <h3>{carInfo.exterior}</h3>
          <h3>{carInfo.price}</h3>
        </div>
      </div>
    </article>
  );
};

export default Cars;
