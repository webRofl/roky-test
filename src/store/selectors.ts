import type { RootState } from "./store";

export const allNews = (state: RootState) => state.news.all;

export const apiKey = (state: RootState) => state.news.apiKey;

export const formValues = (state: RootState) => state.news.formValues;

export const currentPage = (state: RootState) => state.news.currentPage;
