import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "@/store/services/news";
import { News } from "@/types";

const initialState: News.State = {
  all: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<News.Item[]>) => ({
      ...state,
      all: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      console.log("extraReducer", action);
      state.all = action.payload;
    });
  },
});

export default newsSlice;
