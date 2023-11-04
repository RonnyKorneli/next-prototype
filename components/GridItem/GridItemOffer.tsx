import CouponBadge from '@components/Badge/CouponBadge';
import Delivery from '@components/Delivery';
import PriceWithCTA from '@components/PriceWithCTA';
import TooltipIcon from '@icons/tooltip-filled.svg';
import Image from 'next/image';
import { Offer } from '@graphql/generated/client';

type GridItemOfferProps = {
  offer: Offer;
  onClickEvent?: () => void;
};

export default function GridItemOffer({
  offer,
  onClickEvent,
}: GridItemOfferProps) {
  // TODO: EEK Label fehlt
  // @fixme openerOutLink should be always there?
  if (!offer) {
    return <></>;
  }
  if (!offer.openerOutLink) {
    throw new Error('');
  }
  if (!offer.price) {
    return <></>;
  }
  if (!offer.minShippingCost) {
    return <></>;
  }
  if (!offer.shop) {
    return <></>;
  }
  return (
    <a
      rel="noreferrer"
      href={offer.openerOutLink}
      target="_blank"
      title="Zum Shop"
      className="max-w-1/3 md:max-w-1/3 lg:max-w-2/4 flex grow-1 basis-1/3 cursor-pointer flex-col p-1 text-grey no-underline hover:shadow-lg md:ml-0 md:basis-1/3 lg:grow-1 lg:basis-1/4"
      data-gtm="grid-list-item"
    >
      <span className="relative flex h-full w-full flex-col  items-center border border-solid border-grey-light-30 bg-white p-1 pb-6 hover:border-grey-light-20 hover:shadow-lg md:w-full">
        <span className="m-0 h-10 max-h-10 max-w-full overflow-hidden py-1 text-center text-xs leading-tight underline ">
          {offer.name}
        </span>
        {offer.imageLarge?.hd && (
          <div className="mb-2 flex h-40 max-h-56 w-56 items-center justify-center text-xs">
            <Image
              src={offer.imageLarge.hd}
              width={225}
              height={225}
              alt={offer.name}
              className="w-auto"
            />
          </div>
        )}
        <div className="flex-column absolute left-0 bottom-40 flex items-center self-center justify-self-start leading-tight">
          {offer?.badges?.map((badge) => {
            if (!badge) return <></>;
            if (!badge.name) return <></>;
            if (!badge.value) return <></>;
            return (
              <CouponBadge
                key={badge.name}
                name={badge.name}
                size="large"
                value={badge.value}
              />
            );
          })}
        </div>
        <PriceWithCTA
          price={offer.price}
          baseprice={offer.baseprice}
          shippingCost={offer.minShippingCost}
          onClickEvent={onClickEvent}
        />
        <div className="mt-6 mb-1 ml-5 block w-full">
          <Delivery
            isCentered={false}
            isFast={offer?.delivery?.color?.toString() === 'darkgreen'}
            text={offer.delivery?.text?.toString()}
            hideTextMdDown={false}
            iconSize="small"
            textSize="small"
          />
        </div>

        <div className="ml-4 flex w-full cursor-pointer items-start justify-start text-xs leading-snug text-grey ">
          <span data-href={offer.shopInfoUrl}>
            <TooltipIcon className="ml-1 mr-4 h-4 w-4 fill-grey-dark-10" />
          </span>
          <span className="overflow-hidden text-grey line-clamp-2">
            {offer.merchantName ? (
              <>
                {offer.merchantName}
                <br />
                via {offer.shop.name}
              </>
            ) : (
              <>{offer.shop.name}</>
            )}
          </span>
        </div>
      </span>
    </a>
  );
}
