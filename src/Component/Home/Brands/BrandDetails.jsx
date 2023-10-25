import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";

const BrandDetails = () => {
  const loaderBrandCard = useLoaderData();
  console.log(loaderBrandCard);

  return (
    <div className="grid grid-cols-2 gap-9 p-5 bg-gradient-to-br from-[#0F4C81] to-pink-200">
      {loaderBrandCard.map((brandCard, idx) => (
        <BrandDetailsCard key={idx} brandCard={brandCard}></BrandDetailsCard>
      ))}
    </div>
  );
};

export default BrandDetails;
