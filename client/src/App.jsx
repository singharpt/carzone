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
      element: <Home />,
    },
    {
      path: "/createcars",
      element: <CreateCar title="BOLT BUCKET | Customize" />,
    },
    {
      path: "/viewcars",
      element: <ViewCars title="BOLT BUCKET | Custom Cars" />,
    },
    {
      path: "/viewcars/:id",
      element: <CarDetails title="BOLT BUCKET | View" />,
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
