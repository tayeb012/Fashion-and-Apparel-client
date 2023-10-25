import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.");
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "SIGN OUT SUCCESSFULLY",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-product"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="bg-gradient-to-br from-pink-200 to-[#0F4C81]  text-[#0F4C81] px-6 sm:px-10 py-2 relative">
        <div className=" flex justify-between items-center">
          <h1 className="flex text-lg sm:text-2xl text-[#0F4C81] font-bold">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/2671/2671732.png?ga=GA1.1.1784770005.1690653755"
              alt="logo"
            />
            <p>hic Style</p>
          </h1>
          <div className="flex">
            <ul
              className={`z-20 absolute duration-1000
            
            ${open ? "top-12" : "-top-60"}
            right-6
              p-4 bg-[#BCC6D5] md:bg-transparent md:static flex flex-col md:flex-row gap-3 rounded-md sm:gap-8 list-none`}
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center z-30">
            {user ? (
              <>
                <img
                  className="relative  inline-block h-6 w-6 rounded-md object-cover object-center border border-red-300"
                  alt={<FaRegUserCircle className="text-3xl"></FaRegUserCircle>}
                  src={user.photoURL}
                />
                <p>{user.displayName}</p>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm sm:btn-md bg-[#ff8a65] hover:bg-[#ff5722] text-[#4a148c] border-none"
                >
                  SIGN OUT
                </button>
              </>
            ) : (
              <>
                <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
                <Link to="/login">
                  <button className="btn btn-sm sm:btn-md bg-[#ff8a65] hover:bg-[#ff5722] text-[#4a148c]">
                    SING IN
                  </button>
                </Link>
              </>
            )}
            <div
              className="text-4xl md:hidden z-40"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RiCloseCircleLine></RiCloseCircleLine>
              ) : (
                <BiMenuAltRight></BiMenuAltRight>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
