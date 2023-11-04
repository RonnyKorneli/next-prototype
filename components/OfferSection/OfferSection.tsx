// @fixme Hier wird der Graphql server angerufen, dieser ist nicht verfügbar im client!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import OfferFilter from '@components/OfferFilter/OfferFilter';
import OfferPagination from '@components/OfferPagination/OfferPagination';
import Preloader from '@components/Preloader/';
import ListItemOffer from '@components/ListItem/ListItemOffer';
import GridItemOffer from '@components/GridItem/GridItemOffer';
import { selectDisplayList } from '@components/OfferSection/offerSectionSlice';
import { useSelector } from 'react-redux';
import {
  selectClassification,
  selectProductId,
  selectProductName,
} from '@store/server/ProductSlice';
import {
  selectLoading,
  selectOffers,
  selectSelectedOfferFilter,
} from '@store/server/OfferDataSlice';
import { Offer } from '@graphql/generated/client';
import { useRouter } from 'next/router';

export default function OfferSection() {
  const router = useRouter();
  const productName = useSelector(selectProductName);
  const productId = useSelector(selectProductId);
  const classification = useSelector(selectClassification);

  const isList = useSelector(selectDisplayList);
  const isLoading = useSelector(selectLoading);
  const offers = useSelector(selectOffers);
  const filterState = useSelector(selectSelectedOfferFilter);

  const handleOpenOfferModal = (offer: Offer) => {
    // @todo Graphql server ist nur auf dem server erreichbar, wir sind hier im client
    //       Das muss über einen Umweg gelöst werden
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filterState,
          ...{
            page: router.query.page,
            modal: 'offerModal',
            offerId: offer.id,
          },
        },
      },
      {
        pathname: `/produkte/${productName}/${productId}`,
        query: {
          ...filterState,
          ...{
            page: router.query.page,
            modal: 'offerModal',
            offerId: offer.id,
          },
        },
      }
    );
  };

  const wrapperClasses =
    classification + ' ' + (isList ? ' ' : 'flex flex-wrap -mx-1 my-0');

  if (!productName) {
    return <></>;
  }
  return (
    <section className="mx-auto w-full max-w-7xl md:px-3">
      <OfferFilter />
      {/*@TODO variant class must be checked in ListItemOffer and the GridItemOffer*/}
      <section className={'relative ' + wrapperClasses}>
        {isLoading ? <Preloader /> : ''}

        {offers.map((offer: OfferType) => {
          return isList ? (
            <ListItemOffer
              key={offer.id}
              offer={offer}
              onClickEvent={() => {
                handleOpenOfferModal(offer);
              }}
            />
          ) : (
            <GridItemOffer
              key={offer.id}
              offer={offer}
              onClickEvent={() => {
                handleOpenOfferModal(offer);
              }}
            />
          );
        })}
      </section>
      <OfferPagination />
    </section>
  );
}
