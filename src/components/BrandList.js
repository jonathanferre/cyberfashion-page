import React from "react";
import Card from "./../components/common/Card";
var dataJSON = require("./../tools/brands");
const brands = Object.values(dataJSON);

function BrandList() {
  return (
    <div className="container brand-list">
      <div className="row no-margin align-items-stretch">
        <Card brands={brands}></Card>
      </div>
    </div>
  );
}

export default BrandList;
