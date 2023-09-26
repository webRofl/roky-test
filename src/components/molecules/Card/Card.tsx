import Image from 'next/image';
import { FC } from 'react';
import s from './style.module.css';

interface Props {
  imgLink: string | undefined;
  date: string;
  title: string;
  id: string;
}

const Card: FC<Props> = ({ date, imgLink, title }) => {
  return (<div className={s.container}>
    {imgLink && <img className={s.image} src={imgLink} alt='card image' />}
    <div className={s.time}>
      {new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date)) + ', ' + new Intl.DateTimeFormat("en-US", { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(new Date(date))}
    </div>
    <h3 className={s.title}>{title}</h3>
    <button className={s.details}>Details <Image src='/arrow-right.svg' alt='arrow right icon' width={15} height={15} /></button>
  </div>);
}

export default Card;