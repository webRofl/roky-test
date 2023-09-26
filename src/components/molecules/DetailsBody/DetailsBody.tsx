import React, { FC, useEffect } from 'react';
import s from './style.module.css';

interface Props {
  img: string;
  title: string;
  trailText: string;
  name: string;
  body: string;
}

const DetailsBody: FC<Props> = React.memo(({ img, name, title, trailText, body }) => {
  useEffect(() => {
    console.log(title);
  }, [title]);

  return (<main className={s.container}>
    <img className={s.img} src={img} alt="details image" />
    {/* <h1>{title}</h1> */}
    <div className={s.body}>{body}</div>
    <blockquote className={s.trail}>
      <div>{trailText}</div>
      <div>{name}</div>
    </blockquote>
  </main>);
});

DetailsBody.displayName = 'DetailsBody';
 
export default DetailsBody;