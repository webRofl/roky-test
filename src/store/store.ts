import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "@/store/reducers/news";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [newsSlice.name]: newsSlice.reducer,
    },
  });

export type RootState = ReturnType<typeof makeStore>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];

export default createWrapper(makeStore);
