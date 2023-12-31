import React from "react";
import { useSelector } from "react-redux";
import TableRow from "../../Components/TableRow";
import { useDispatch } from "react-redux";
import { deleteBook } from "./BookSlice";

const BookView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (paramId) => {
    // console.log("Delete by id: ", paramId);
    dispatch(deleteBook(paramId));
  };

  const handleEdit = (paramsId) => {
    console.log("Edit by id: ", paramsId);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl py-3">List of Books</h1>
      {/* table to show books */}
      <div className="px-16 border rounded-xl mb-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Title</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((item, i) => (
                  <TableRow
                    key={i}
                    id={item.id}
                    Title={item.title}
                    Author={item.author}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookView;
