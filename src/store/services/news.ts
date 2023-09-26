import { News } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ReturnFetchNews {
  data: News.Item[];
  isAppend: boolean;
  currentPage: number;
}

export const fetchNews = createAsyncThunk<ReturnFetchNews, News.FetchNewsAsyncThunkProps>(
  "news/fetch",
  async ({ apiKey, currentPage, query, isAppend = false, pageSize = 20, orderBy = 'newest' }) => {
    let queryString = `api-key=${apiKey}&show-fields=thumbnail&page-size=${pageSize}&order-by=${orderBy}&page=${isAppend ? currentPage + 1 : currentPage}`;

    if (query && query.length) {
      queryString += `&q=${query}`;
    }

    const response = await axios.get<News.Response>(
      'https://content.guardianapis.com/search?' + queryString,
    );

    return {data: response.data.response.results, isAppend, currentPage: response.data.currentPage};
  },
);
