import Image from 'next/image';
import { FC } from 'react';
import s from './style.module.css';
import React from 'react';
import Link from 'next/link';
import { StringUtils } from '@/utils';

interface Props {
  imgLink: string | undefined;
  date: string;
  title: string;
  id: string;
}

const Card: FC<Props> = React.memo(({ date, imgLink, title, id }) => {
  return (<div className={s.container}>
    {imgLink && <img className={s.image} src={imgLink} alt='card image' />}
    <div className={s.time}>
      {StringUtils.getPrettyDate(date)}
    </div>
    <h3 className={s.title}>{title}</h3>
    <Link href={'/news/' + id} className={s.details}>Details <Image src='/arrow-right.svg' alt='arrow right icon' width={15} height={15} /></Link>
  </div>);
});

Card.displayName = 'Card';

export default Card;