import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import NavBar from "../Layouts/NavBar";
import BookView from "../Features/Books/BookView";
import AddBook from "../Features/Books/AddBook";
import Footer from "../Layouts/Footer";

const Index = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="px-5 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BookView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
