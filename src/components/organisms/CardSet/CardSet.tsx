import { Card } from '@/components/molecules';
import { News } from '@/types';
import { FC } from 'react';
import s from './style.module.css';

interface Props {
  data: News.Item[];
}

const CardSet: FC<Props> = ({ data }) => {
  return (<article className={s.container}>
    {data.map((item) => {
      const { id, webTitle, webPublicationDate } = item;

      return <Card key={id} id={id} date={webPublicationDate} title={webTitle} imgLink={item?.fields?.thumbnail} />
    })}
  </article>);
}
 
export default CardSet;