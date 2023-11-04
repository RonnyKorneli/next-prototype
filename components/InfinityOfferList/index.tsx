import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Offer from './Offer/index';
import InfiniteScroll from 'react-infinite-scroller';
import { FirstResultsetOffer, OfferData } from '../../styles/types/getOffers';

type Props = {
  data: OfferData;
};

interface Response {
  message: string;
  data: OfferData;
}

const InfinityOfferList = ({ data }: Props) => {
  const [allOffers, setAllOffer] = useState(data.offer.firstResultsetOffer);
  const [dataCount, setDataCount] = useState(data.count);
  const [hasMore, setHasMore] = useState(true);
  const query = useRouter().query.query ?? '';

  const getMoreOffers = async () => {
    if (query === '') return;
    const offset = Number(dataCount.offset) + Number(dataCount.limit);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/sem/getOffers?query=${
        query + '&' + 'offset=' + offset
      }`
    );
    const responseData: Response = await response.json();
    setAllOffer((allOffers) => [
      ...allOffers,
      ...responseData.data.offer.firstResultsetOffer,
    ]);
    setDataCount(responseData.data.count);
    setHasMore(allOffers.length < 300);
  };

  const showItems = (posts: FirstResultsetOffer[]) => {
    const items = [];
    for (let i = 0; i < records; i++) {
      if (posts[i] !== undefined) {
        items.push(
          <Offer
            key={'RS' + 1 + ':' + posts[i].id + '-' + i}
            offer={posts[i]}
          />
        );
      }
    }
    return items;
  };
  const itemsPerPage = 10;
  const diffBeforeAutoReload = 30;
  const [records, setrecords] = useState(itemsPerPage);
  const loadMore = () => {
    setrecords(records + itemsPerPage);

    if (records + diffBeforeAutoReload >= allOffers.length) {
      getMoreOffers();
    }
  };

  if (allOffers && allOffers.length > 0) {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={true}
      >
        <div className="mb-[5px] grid grid-cols-2 gap-[5px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {showItems(allOffers)}
        </div>
      </InfiniteScroll>
    );
  } else {
    return null;
  }
};

export default InfinityOfferList;
