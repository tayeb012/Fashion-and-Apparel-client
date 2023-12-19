import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCard = () => {
  const card = useLoaderData();
  console.log(card);
  const { _id, image, brand, name, price, rating, type, shortDescription } =
    card || "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const shortDescription = e.target.shortDescription.value;
    const rating = e.target.rating.value;
    const updateProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating,
      shortDescription,
    };
    console.log(updateProduct);

    // update product to server site
    fetch(
      `https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((card) => {
        console.log(card);
          if (card.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Update product SUCCESSFULLY",
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
    <div className=" flex justify-center bg-gradient-to-br from-[#0F4C81] to-pink-200">
      <div className="p-4 w-3/5">
        <h2 className="text-2xl font-semibold text-center text-pink-200 mb-4">
          Update Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-pink-200 to-[#0F4C81] p-4 rounded shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-blue-500"
            >
              Image:
            </label>
            <input
              type="text"
              name="image"
              placeholder={image}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              defaultValue={card ? image : ""}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-500"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder={name}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              defaultValue={card ? name : ""}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-blue-500"
            >
              Type:
            </label>
            <input
              type="text"
              name="type"
              placeholder={type}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              defaultValue={card ? type : ""}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-blue-500"
            >
              Brand Name:
            </label>
            <select
              name="brand"
              placeholder={brand}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              defaultValue={card ? brand : ""}
            >
              <option value="Nike" className="text-blue-500">
                Nike
              </option>
              <option value="Adidas" className="text-blue-500">
                Adidas
              </option>
              <option value="Gucci" className="text-blue-500">
                Gucci
              </option>
              <option value="Zara" className="text-blue-500">
                Zara
              </option>
              <option value="H&M" className="text-blue-500">
                H&M
              </option>
              <option value="Levi's" className="text-blue-500">
                Levi's
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-blue-500"
            >
              Price:
            </label>
            <input
              type="text"
              name="price"
              placeholder={price}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              defaultValue={card ? price : ""}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-blue-500"
            >
              Short Description:
            </label>
            <textarea
              name="shortDescription"
              placeholder={shortDescription}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              defaultValue={card ? shortDescription : ""}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-blue-500"
            >
              Rating:
            </label>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-red-400"
                value="1"
                required
                defaultChecked={card ? rating === "1" : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-orange-400"
                value="2"
                required
                defaultChecked={card ? card.rating === "2" : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-yellow-400"
                value="3"
                required
                defaultChecked={card ? card.rating === "3" : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-lime-400"
                value="4"
                required
                defaultChecked={card ? card.rating === "4" : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-green-400"
                value="5"
                required
                defaultChecked={card ? card.rating === "5" : false}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCard;
