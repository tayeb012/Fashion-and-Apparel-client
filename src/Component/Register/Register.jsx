import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { googleSignIn, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        navigate("/");
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

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log("handleRegister", name, photoURL, email, password, accepted);

    if (!accepted) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Accept our terms and conditions",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should be at least 6 characters",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should contain at least one capital letter",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!/[@$!%*?&]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "red",
        text: "Password should contain at least one special character (@, $, !, %, *, ?, or &)",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    registerUser(email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
        navigate("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile Update",
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

    console.log("congratulation");
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div className="md:w-3/4 lg:w-1/2 bg-[#FFFFFF] mx-auto">
        <h1 className="text-4xl font-semibold text-center">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your photoURL"
              // https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="flex gap-2">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept our terms and conditions</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#0F4C81] text-[#BCC6D5]">
              Register
            </button>
          </div>
        </form>
        <div className="form-control place-items-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-wide bg-red-100 text-[#0F4C81]"
          >
            Google Sign in
          </button>
        </div>
        <p className="text-[#706F6F] text-center">
          Have An Account ?
          <Link to="/login" className="font-bold text-[#F75B5F]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
