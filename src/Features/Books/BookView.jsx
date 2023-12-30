import React from "react";
import { useSelector } from "react-redux";

const BookView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl py-3">List of Books</h1>
      {/* table to show books */}
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default BookView;
