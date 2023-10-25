import React from "react";
import Brand from "./Brand";

const Brands = ({ brands }) => {
  return (
    <div className="flex justify-center bg-[#c5e3fc]">
      <div className="my-20 grid gap-20  grid-cols-3">
        {brands.map((brand, idx) => (
          <Brand brand={brand} key={idx}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
