import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "./libraryTypes";
import { fetchBooksFromApi } from "./fakeApi";

// AsyncThunk
export const fetchAvailableBooks = createAsyncThunk(
  "library/fetchAvailableBooks",
  async (_NEVER, { rejectWithValue }) => {
    try {
      const books = await fetchBooksFromApi();
      return books;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

const initialState: LibraryState = {
  availableBooks: [],
  borrowedBooks: [],
  loading: false,
  error: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    borrowBook: (state, action: PayloadAction<number>) => {
      const bookId = action.payload;

      state.availableBooks = state.availableBooks.filter((id) => id !== bookId);

      state.borrowedBooks.push(bookId);
    },
    returnBook: (state, action: PayloadAction<number>) => {
      const bookId = action.payload;

      state.borrowedBooks = state.borrowedBooks.filter((id) => id !== bookId);

      state.availableBooks.push(bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailableBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAvailableBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.availableBooks = action.payload;
      })
      .addCase(fetchAvailableBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { borrowBook, returnBook } = librarySlice.actions;
export default librarySlice.reducer;
