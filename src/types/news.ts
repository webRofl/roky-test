export interface Item {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields?: {
    thumbnail: string;
  };
}

export interface Response {
  response: {
    currentPage: number;
    orderBy: string;
    pageSize: number;
    pages: number;
    results: Item[];
  };
}

export interface State {
  all: Item[] | null;
  apiKey: string;
}

export interface FetchNewsAsyncThunkProps {
  apiKey: string;
  query?: string;
  pageSize?: number | string;
  orderBy?: 'newest' | 'oldest' | 'relevance';
}

