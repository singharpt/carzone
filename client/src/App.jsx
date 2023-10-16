import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import ViewCars from "./pages/ViewCars";
import CreateCar from "./pages/CreateCar";
import CarDetails from "./pages/CarDetails";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home title="CARZONE" />,
    },
    {
      path: "/createcars",
      element: <CreateCar title="CARZONE | Create Car" />,
    },
    {
      path: "/viewcars",
      element: <ViewCars title="CARZONE | View Cars" />,
    },
    {
      path: "/viewcars/:id",
      element: <CarDetails title="CARZONET | Edit Car" />,
    },
  ]);

  return (
    <div className="app">
      <Header />
      {element}
    </div>
  );
};

export default App;
