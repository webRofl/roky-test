import { Card } from '@/components/molecules';
import { News } from '@/types';
import { FC } from 'react';
import s from './style.module.css';

interface Props {
  data: News.Item[];
}

const CardSet: FC<Props> = ({ data }) => {
  return (<article className={s.container}>
    {data.map(({ id, fields: { thumbnail }, webTitle, webPublicationDate }) => {
      return <Card key={id} id={id} date={webPublicationDate} title={webTitle} imgLink={thumbnail} />
    })}
  </article>);
}
 
export default CardSet;