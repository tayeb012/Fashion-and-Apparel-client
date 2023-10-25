import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, image } = brand;
  return (
    <div className="hover:scale-105 transform-">
      <Link to={`/brand-details/${name}`}>
        <div className="card w-max bg-base-100">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
          </div>
          <figure className="">
            <img src={image} alt={name} />
          </figure>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
