import { Details } from '@/components/organisms';
import { News } from '@/types';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from "next/router";
import { useEffect } from 'react';

export const getServerSideProps = (async (context) => {
  const id = Array.isArray(context.query.slug) ? context.query.slug.join('/') : context.query.slug;

  const response = await axios.get<News.ItemDetailsResponse>(`https://content.guardianapis.com/${id}?api-key=${process.env.API_KEY}&show-fields=headline,standfirst,byline,trailText,thumbnail,bodyText`);

  return { props: { data: response.data.response.content } }
}) satisfies GetServerSideProps<{
  data: News.ItemDetails
}>

export default function NewsPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <Details {...data} />;
}
