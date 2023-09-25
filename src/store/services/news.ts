import { NewsResponse } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (apiKey: string) => {
    const response = await axios.get<NewsResponse>(
      `https://content.guardianapis.com/search?api-key=${apiKey}`,
    );

    return response.data.response.results;
  },
);
