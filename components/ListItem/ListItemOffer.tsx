import CouponBadge from '@components/Badge/CouponBadge';
import RatingStars from '@components/RatingsStars/RatingStars';
import Delivery from '@components/Delivery';
import PriceWithCTA from '@components/PriceWithCTA';
import TooltipIcon from '@icons/tooltip-outline.svg';
import Image from 'next/image';
import { Offer } from '@graphql/generated/client';

type ListItemOfferProps = {
  onClickEvent?: () => void;
  offer: Offer;
};

export default function ListItemOffer({
  offer,
  onClickEvent,
}: ListItemOfferProps) {
  // TODO: EEK Label fehlt
  if (!offer.openerOutLink) {
    throw new Error('No opener out link');
  }
  if (!offer.price) {
    throw new Error('No price');
  }
  return (
    <a
      href={offer.openerOutLink}
      target="_blank"
      title="Zum Shop"
      rel="noreferrer"
      className="row-auto-[minmax(max-w-min_max-w-max)] my-1 grid grid-cols-[100px_75px_40px_auto]  border border-solid border-grey-light-30 bg-white md:grid-cols-[50%_135px_60px_auto] lg:grid-cols-[125px_37%_130px_85px_auto] lg:gap-x-3.5 isHoverable:hover:border-grey-dark-30 isHoverable:hover:shadow-1xl"
      data-test="list-item"
      data-gtm="grid-list-item"
    >
      <div className="col-span-5 flex flex-col items-start lg:col-span-6 ">
        {offer?.badges?.map((badge, key) => {
          if (!badge) return <></>;
          if (!badge.name) return <></>;
          if (!badge.value) return <></>;
          return (
            <CouponBadge
              key={'badgeListItem-' + offer.id + key}
              name={badge.name}
              size="medium"
              value={badge.value}
            />
          );
        })}
      </div>
      {offer.image?.sd && (
        <div className="col-span-1 row-start-2 row-end-4 mt-3.5 mr-2.5 mb-auto ml-1 h-24 w-24 items-center justify-center justify-self-center text-xs leading-tight md:row-end-3 md:mx-1 md:my-auto md:hidden lg:col-span-1 lg:row-start-2 lg:row-end-3 lg:mt-6 lg:ml-7 lg:flex lg:items-start">
          <Image
            src={offer.image.sd}
            width={90}
            height={90}
            alt={offer.name}
            className="object-contain"
          />
        </div>
      )}
      <div className="col-start-2 col-end-7 row-start-2 row-end-3 self-center justify-self-start md:col-start-1 md:col-end-2 md:row-start-3 md:mt-2.5  md:ml-3 md:self-center lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mt-6 lg:self-start ">
        <div className="max-h-4 overflow-hidden p-0 pr-1 text-xs leading-tight underline md:max-h-8">
          {offer.name}
        </div>
      </div>
      <div className="col-start-2 col-end-4 row-start-3 row-end-4 mt-7 md:col-start-2 md:col-end-4 md:row-start-3 lg:col-start-3 lg:col-end-4 lg:row-start-2 ">
        {offer?.shop?.image?.sd && (
          <Image
            src={offer.shop.image.sd}
            width={80}
            height={30}
            alt={offer.name}
            className="max-w-14 md:max-w-20 max-h-7 object-contain md:max-h-8"
          />
        )}
        {offer.shopRating?.rating && (
          <div className="hidden md:hidden md:items-center lg:flex">
            <RatingStars
              size="extrasmall"
              color="grey"
              stars={5}
              width={12}
              rating={offer.shopRating.rating / 20}
            />
            <span className="inline-block text-xs">
              ({offer.shopRating.ratingCount})
            </span>
          </div>
        )}
        <span className="mt-1.5 hidden text-xs md:block md:leading-tight">
          {offer.merchantName ? offer.merchantName : offer.shop?.name}
        </span>
      </div>
      {offer.delivery &&
        typeof offer.delivery.color === 'string' &&
        offer.delivery.text === 'string' && (
          <Delivery
            isCentered={false}
            isFast={offer?.delivery?.color?.toString() === 'darkgreen'}
            text={offer.delivery.text}
            hideTextMdDown={false}
            iconSize="small"
            textSize="small"
          />
        )}
      <div
        className="col-start-1 col-end-3 row-start-4 row-end-5 mt-1.5 ml-2 flex cursor-pointer items-center self-end justify-self-start pb-2.5 text-xs md:col-end-2 md:ml-3 md:justify-self-start lg:row-start-3 lg:ml-5 lg:self-end lg:justify-self-center isHoverable:hover:text-blue"
        data-id={offer.id}
        data-gtm="offer-details-list-open"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClickEvent && onClickEvent();
        }}
      >
        <TooltipIcon className="pointer-events-none mr-1.5 h-3.5 w-3.5 fill-grey" />
        Angebotsdetails
      </div>
      <div className="col-start-5 col-end-7 row-start-4 row-end-5 mb-2.5 mr-1.5 flex self-end justify-self-end">
        <PriceWithCTA
          price={offer.price}
          baseprice={offer.baseprice}
          shippingCost={offer.minShippingCost}
        />
      </div>
    </a>
  );
}
