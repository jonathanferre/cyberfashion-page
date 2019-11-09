import React from "react";
import { NavLink } from "react-router-dom";

function CategoriesHandler() {
  const activeClassName = "selected";
  return (
    <div className="categories-handler">
      <h4>Elegí tu categoría</h4>
      <NavLink
        className="btn btn-default circle black"
        activeClassName={activeClassName}
        exact
        to="/man"
      >
        Hombre
      </NavLink>
      <NavLink
        className="btn btn-default circle black"
        activeClassName={activeClassName}
        to="/woman"
      >
        Mujer
      </NavLink>
      <NavLink
        className="btn btn-default circle black"
        activeClassName={activeClassName}
        to="/boys"
      >
        Niños
      </NavLink>
    </div>
  );
}

export default CategoriesHandler;
