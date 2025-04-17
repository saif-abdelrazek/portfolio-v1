import React from "react";
import { Link } from "react-router-dom";

function Undefined() {
  return (
    <div className="flex flex-col text-center items-center  min-h-screen text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-xl mb-6">
        You could select a page from the menu or go back to the home page.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Undefined;
