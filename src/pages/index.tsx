import { useAppDispatch, useAppSelector } from "@/hooks";
import { Selectors, fetchNews, wrapper } from "@/store";
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
  const news = useAppSelector(Selectors.news);

  useEffect(() => {
    dispatch(fetchNews(apiKey));
  }, [apiKey, dispatch]);

  useEffect(() => {
    console.log("component", news);
  }, [news]);

  return <div>main page</div>;
};

export default wrapper.withRedux(MainPage);
