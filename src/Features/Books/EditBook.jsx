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
      <h1 className="text-center">Edit Book</h1>
      <div className="flex justify-between items-center mx-auto">
        <form onSubmit={handleSubmit} className="w-[40%] border border-red-400">
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
          <input
            className="btn btn-md btn-outline w-[70%] mt-5"
            type="submit"
            value="Edit Book"
          />
        </form>
      </div>
    </div>
  );
};

export default EditBook;
