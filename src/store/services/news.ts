import { News } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AsyncThunkProps {
  apiKey: string;
  query?: string;
  pageSize?: number | string;
  orderBy?: 'newest' | 'oldest' | 'relevance';
}

export const fetchNews = createAsyncThunk<News.Item[], AsyncThunkProps>(
  "news/fetch",
  async ({ apiKey, query, pageSize = 20, orderBy = 'newest' }) => {
    let queryString = `api-key=${apiKey}&show-fields=thumbnail&pageSize=${pageSize}&orderBy=${orderBy}`;

    if (query && query.length) {
      queryString += `&q=${query}`;
    }

    const response = await axios.get<News.Response>(
      'https://content.guardianapis.com/search?' + queryString,
    );

    return response.data.response.results;
  },
);
