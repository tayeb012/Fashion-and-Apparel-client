import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleSignIn, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "Google Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(errorMessage);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Google Login Failed! , ${credential}`,
        });
        // ...
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log("Login submit", email, password);

    loginUser(email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        // console.log("Login successfully");
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div className="md:w-3/4 lg:w-1/2 bg-[#FFFFFF] mx-auto">
        <h1 className="text-4xl font-semibold text-center">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="form-control place-items-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-wide bg-yellow-400"
          >
            Google Sign in
          </button>
        </div>
        <p className="text-[#706F6F] text-center">
          Don't Have An Account ?
          <Link to="/register" className="font-bold text-[#F75B5F]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
