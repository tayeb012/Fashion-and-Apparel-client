import React from "react";
import { Link } from "react-router-dom";

const BrandDetailsCard = ({ brandCard }) => {
  console.log(brandCard);
  const { _id, image, name, brand, price, rating, type, shortDescription } =
    brandCard || "";
  console.log(_id);
  return (
    <div>
      <div className="">
        <div className="max-w-md mx-auto bg-gradient-to-br from-pink-200  to-[#0F4C81] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full wh-full object-cover md:w-48"
                src={image}
                alt="Product Image"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Type: {type}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                {name}
              </h2>
              <p className="mt-2 text-red-400">{brand}</p>
              <p className="mt-2 text-red-400">Price: {price}</p>
              <div className="mt-3 flex items-center">
                <span className="text-yellow-900 text-sm">Rating:</span>
                <div className="ml-2">
                  <span className="text-2xl text-green-300">{rating}</span>
                  <span className="text-yellow-900">/5</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to={`/product-details/${_id}`}>
                  <button className="px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mr-2">
                    Details
                  </button>
                </Link>
                <Link to={`/product-update/${_id}`}>
                  <button className="px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailsCard;
