import { CardSet, SearchForm } from '@/components/organisms';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Selectors, fetchNews, newsSlice, wrapper } from "@/store";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FC, useEffect } from "react";

export const getStaticProps = (async () => {
  const apiKey = process.env.API_KEY ?? "";

  return { props: { apiKey } };
}) satisfies GetStaticProps<{
  apiKey: string;
}>;

const MainPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  apiKey,
}) => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(Selectors.allNews);
  const { setApiKey } = newsSlice.actions;

  useEffect(() => {
    dispatch(fetchNews({ apiKey }));
    dispatch(setApiKey(apiKey));
  }, [apiKey, dispatch, setApiKey]);

  useEffect(() => {
    console.log("component", news);
  }, [news]);

  return <main>
    <SearchForm />
    <CardSet data={news ?? []} />
  </main>;
};

export default wrapper.withRedux(MainPage);
