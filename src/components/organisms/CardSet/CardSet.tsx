import { Card } from '@/components/molecules';
import { News } from '@/types';
import { FC, useEffect, useState } from 'react';
import s from './style.module.css';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Selectors, fetchNews, newsSlice } from '@/store';
import { debounce } from 'ts-debounce';

interface Props {
  data: News.Item[];
}

const CardSet: FC<Props> = ({ data }) => {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch();
  const apiKey = useAppSelector(Selectors.apiKey);
  const formValues = useAppSelector(Selectors.formValues);
  const currentPage = useAppSelector(Selectors.currentPage);
  const { setCurrentPage } = newsSlice.actions;

  useEffect(() => {
    if (isFetching) {
      const fetch = debounce(() => {
        dispatch(setCurrentPage(currentPage + 1));
        dispatch(fetchNews({ apiKey, ...formValues, isAppend: true, currentPage }));
        setIsFetching(false);
      }, 300);

      fetch();
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  const scrollHandler = () => {
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 200) {
      setIsFetching(true);
    }
  };


  return (<article className={s.container}>
    {data.map((item) => {
      const { id, webTitle, webPublicationDate } = item;

      return <Card key={id} id={id} date={webPublicationDate} title={webTitle} imgLink={item?.fields?.thumbnail} />
    })}
  </article>);
}
 
export default CardSet;