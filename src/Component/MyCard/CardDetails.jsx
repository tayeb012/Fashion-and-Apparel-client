import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CardDetails = () => {
  const card = useLoaderData();
  // const { setMyCard } = useContext(AuthContext);
  const { _id, image, name, brand, price, rating, type, shortDescription } =
    card || "";

  const handleMyCard = () => {
    // add product to server site
    fetch(
      "https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-my-product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(card),
      }
    )
      .then((res) => res.json())
      .then((card) => {
        console.log(card);
        if (card.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "added product SUCCESSFULLY",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="bg-gradient-to-br from-[#0F4C81] to-pink-200 flex justify-center h-fit">
      <div className="max-w-full h-auto my-8 rounded overflow-hidden shadow-lg bg-gradient-to-tl from-pink-400 via-purple-400 to-indigo-500 text-white">
        <img src={image} alt={name} className="w-full" />
        <div className="px-6 py-4 flex">
          <div>
            <div className="font-bold text-xl mb-2 text-yellow-300">{name}</div>
            <p className="text-gray-200 mb-2">{brand}</p>
            <p className="text-gray-200 text-sm mb-4">Type: {type}</p>
            <p className="text-gray-200 text-base">{shortDescription}</p>
          </div>
          <div className="ml-2">
            <p className="text-xl text-blue-300 mb-2">Price: ${price}</p>
            <p className="text-yellow-400 text-xl mb-4">
              Rating: <span className="text-2xl ">{rating}</span>
              <span className="text-yellow-100">/5</span>
            </p>
            <button
              className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
              onClick={handleMyCard}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
