import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  // const [addBook, setAddNook] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books.length);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const data = { id: uuidv4(), title, author };
    dispatch(addBook(data));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h1 className="text-center font-bold">Add Book</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[45%]">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Book title</span>
            </div>
            <input
              name="title"
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Author</span>
            </div>
            <input
              name="author"
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex justify-center items-center">
            <input
              className="btn btn-md btn-outline w-[70%] mt-5 bg-yellow-200 font-bold"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
