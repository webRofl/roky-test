import type { RootState } from "./store";

export const allNews = (state: RootState) => state.news.all;

export const apiKey = (state: RootState) => state.news.apiKey;
