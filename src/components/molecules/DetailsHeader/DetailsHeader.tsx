import { StringUtils } from '@/utils';
import React, { FC } from 'react';
import s from './style.module.css';

interface Props {
  date: string;
  title: string;
  link: string;
}

const DetailsHeader: FC<Props> = React.memo(({ date, link, title }) => {
  return (<header className={s.container}>
    <h1 className={s.title}>{title}</h1>
    <div className={s.metaBlock}>
      <span className={s.time}>{StringUtils.getPrettyDate(date)}</span>
      <a className={s.link} href={link}>read on Guardian</a>
    </div>
  </header>);
});

DetailsHeader.displayName = 'DetailsHeader';
 
export default DetailsHeader;