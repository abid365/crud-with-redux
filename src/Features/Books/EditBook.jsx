import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editBook } from "./BookSlice";

const EditBook = () => {
  const location = useLocation();
  console.log(location.state);

  const id = location.state.id;
  const [author, setAuthor] = useState(location.state.Author);
  const [title, setTitle] = useState(location.state.Title);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const author = form.author.value;
    const title = form.title.value;
    const data = { id, title, author };
    console.log(data);
    dispatch(editBook(data));
  };
  return (
    <div>
      <h1 className="text-center font-bold">Edit Book</h1>
      <div className="flex justify-center items-center mx-auto">
        <form onSubmit={handleSubmit} className="w-[45%]">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Book title</span>
            </div>
            <input
              name="title"
              required
              type="text"
              defaultValue={title}
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
              defaultValue={author}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex justify-center items-center">
            <input
              className="btn btn-md btn-outline w-[70%] mt-5 font-bold bg-indigo-200"
              type="submit"
              value="Edit Book"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
