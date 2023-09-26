import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "@/store/services/news";
import { News } from "@/types";

const initialState: News.State = {
  all: null,
  apiKey: '',
  formValues: {},
  currentPage: 1,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setAllNews: (state, action: PayloadAction<News.Item[]>) => ({
      ...state,
      all: action.payload,
    }),
    setApiKey: (state, action: PayloadAction<string>) => ({ ...state, apiKey: action.payload }),
    setFormValues: (state, action: PayloadAction<News.State['formValues']>) => ({ ...state, formValues: action.payload }),
    setCurrentPage: (state, action: PayloadAction<number>) => ({ ...state, currentPage: action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      console.log("extraReducer", action);
      if (action.payload.isAppend) {
        state.all?.push(...action.payload.data);

        return;
      }

      state.all = action.payload.data;
    });
  },
});

export default newsSlice;
