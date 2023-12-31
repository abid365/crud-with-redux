import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
    },
    {
      id: uuidv4(),
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
  ],
};

// creating slice
export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const editData = state.books.filter((book) => book.id == id);
      if (editData) {
        editData[0].title = title;
        editData[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
