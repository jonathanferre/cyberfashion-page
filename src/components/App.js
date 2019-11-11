import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHead from "./MainHead";
import BrandList from "./BrandList";

function App() {
  return (
    <div className="container-fuild">
      <MainHead />
      <BrandList />
    </div>
  );
}

export default App;
