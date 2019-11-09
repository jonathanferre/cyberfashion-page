import React from "react";
import CategoriesHandler from "./CategoriesHandler";

function MainHead() {
  return (
    <div className="main-head">
      <h1>Cyberfashion</h1>
      <h2>23 | 24 | 25 de septiembre</h2>
      <h3>Hasta 40%OFF de descuento en las principales marcas de moda</h3>
      <CategoriesHandler />
    </div>
  );
}

export default MainHead;
