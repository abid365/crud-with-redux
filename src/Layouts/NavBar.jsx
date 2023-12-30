import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex gap-5 py-3 px-5 bg-indigo-200 font-semibold text-slate-700">
      <Link to={"/"} className="hover:text-indigo-800">
        Home
      </Link>
      <Link to={"/show-books"} className="hover:text-indigo-800">
        Show Book
      </Link>
      <Link to={"/add-book"} className="hover:text-indigo-800">
        Add Book
      </Link>
    </nav>
  );
};

export default NavBar;
