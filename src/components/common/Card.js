import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return props.brands.map(brand => {
    return (
      <div key={brand.nombre} className="col-md-6 col-lg-4 logo-block-wrapper">
        <img
          alt={brand.nombre}
          src={"/images/brands/" + brand.nombre + ".svg"}
        ></img>
        <h3>
          <Link to="/brand">{brand.nombre}</Link>
        </h3>
        <h4>{props.discount}</h4>
        <div className="block-site">
          <a className="btn btn-default circle black" href={brand.url}>
            Ir al Sitio
          </a>
        </div>
        <div className="see-more">
          <Link className="" to={"/brand/" + brand.nombre}>
            Más sobre la marca
          </Link>
        </div>
      </div>
    );
  });
}

export default Card;
