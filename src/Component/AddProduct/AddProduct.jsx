import Swal from "sweetalert2";

const placeholder = {
  image: "",
  name: "",
  brand: "",
  type: "Fashion and Apparel",
  price: "",
  shortDescription: "",
  rating: "",
};

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const shortDescription = e.target.shortDescription.value;
    const rating = e.target.rating.value;
    const newProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating,
      shortDescription,
    };

    // add product to server site
    fetch(
      "https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
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
    <div className=" flex justify-center bg-gradient-to-br from-[#0F4C81] to-pink-200">
      <div className="p-4 w-3/5">
        <h2 className="text-2xl font-semibold text-center text-pink-200 mb-4">
          Add Product
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
              placeholder={placeholder.image}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
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
              placeholder={placeholder.name}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-blue-500"
            >
              Type:
            </label>
            <input
              type="text"
              name="type"
              placeholder={placeholder.brand}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-blue-500"
            >
              Brand Name:
            </label>
            <select
              name="brand"
              placeholder={placeholder.type}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
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
              placeholder={placeholder.price}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
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
              placeholder={placeholder.shortDescription}
              className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
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
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-orange-400"
                value="2"
                required
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-yellow-400"
                value="3"
                required
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-lime-400"
                value="4"
                required
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-heart bg-green-400"
                value="5"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
