import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-red-900 flex justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl text-yellow-700">404 page not found page</h1>
        <Link to="/">
          <button className="btn btn-lg">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
