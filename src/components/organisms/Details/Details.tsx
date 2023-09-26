import { DetailsBody, DetailsHeader } from '@/components/molecules';
import { News } from '@/types';
import { FC } from 'react';

const Details: FC<News.ItemDetails> = ({ fields: { bodyText, byline, headline, standfirst, thumbnail, trailText }, webPublicationDate, webUrl }) => {
  return (<>
    <DetailsHeader date={webPublicationDate} link={webUrl} title={headline} />
    <DetailsBody body={bodyText} img={thumbnail} name={byline} title={standfirst} trailText={trailText} />
  </>);
}

export default Details;