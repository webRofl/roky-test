import { News } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk<News.Item[], News.FetchNewsAsyncThunkProps>(
  "news/fetch",
  async ({ apiKey, query, pageSize = 20, orderBy = 'newest' }) => {
    let queryString = `api-key=${apiKey}&show-fields=thumbnail&page-size=${pageSize}&order-by=${orderBy}`;

    if (query && query.length) {
      queryString += `&q=${query}`;
    }

    const response = await axios.get<News.Response>(
      'https://content.guardianapis.com/search?' + queryString,
    );

    return response.data.response.results;
  },
);
