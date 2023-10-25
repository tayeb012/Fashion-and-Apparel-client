import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Swal from "sweetalert2";

const MyCard = () => {
  const loaderMyCard = useLoaderData();
  const [myCard, setMyCard] = useState(loaderMyCard);
  console.log(myCard);

  if (myCard.length == 0) {
    return (
      <div className="bg-gradient-to-br from-[#0F4C81] to-pink-200 h-screen flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-white mb-4">No Data Found</p>
        <p className="text-2xl text-white">
          Sorry, there is no data available at the moment.
        </p>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-my-product/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingUsers = myCard.filter((card) => card._id !== id);
              setMyCard(remainingUsers);
              Swal.fire("Deleted!", "Your card has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#0F4C81] to-pink-200 py-10  flex gap-6 justify-center flex-wrap">
      {myCard ? (
        myCard.map((card, idx) => (
          <Card handleDelete={handleDelete} card={card} key={idx} />
        ))
      ) : (
        <p>No cards to display.</p>
      )}
    </div>
  );
};

export default MyCard;
