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
  currentPage: number;
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
  formValues: Omit<FetchNewsAsyncThunkProps, 'apiKey' | 'currentPage'>;
  currentPage: number;
}

export interface FetchNewsAsyncThunkProps {
  apiKey: string;
  currentPage: number;
  isAppend?: boolean;
  query?: string;
  pageSize?: number | string;
  orderBy?: 'newest' | 'oldest' | 'relevance';
}

