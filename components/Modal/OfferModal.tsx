import { useSelector } from 'react-redux';
import Image from 'next/image';
import CouponBadge from '@components/Badge/CouponBadge';
import RatingStars from '@components/RatingsStars/RatingStars';
import Delivery from '@components/Delivery';
import PriceWithCTA from '@components/PriceWithCTA';
import ShippingCostsTable from '@components/ShippingCostsTable';

import ReturnIcon from '@icons/return.svg';
import ExclamationIcon from '@icons/exclamation.svg';
import ArrowThickRightIcon from '@icons/arrow-thick-right.svg';
import ArrowIcon from '@icons/arrow.svg';
import { selectModalProperties } from '@components/Modal/ModalSlice';
import { selectOffer } from '@store/server/OfferDataSlice';
import { selectOfferShippingCosts } from '@store/server/ShippingCostSlice';

export default function OfferModal() {
  const modalData = useSelector(selectModalProperties);
  if (!modalData.offerId) {
    throw new Error('Opened Offer Modal without passing offerId');
  }
  const shippingCosts = useSelector(
    selectOfferShippingCosts(modalData.offerId)
  );
  const offer = useSelector(selectOffer(modalData.offerId));

  if (!offer) {
    return <></>;
  }
  if (!offer.openerOutLink) {
    throw new Error('[OfferModal] Offer has no Link to Shop');
  }
  if (!offer.price) {
    throw new Error('[OfferModal] Offer has no price');
  }
  if (!offer.shop) {
    throw new Error('[OfferModal] Offer has no shop');
  }
  //todos later: prg Links, voucher code mit line-clamp when too long
  const imageUrl = offer.image ? offer.image.sd : null;
  return (
    <div className="max-w-[500px] p-6 pb-4 lg:w-[500px] lg:px-12 lg:py-3 lg:text-xs">
      {offer.badges?.map((badge) => {
        if (!badge) return <></>;
        if (!badge.name) return <></>;
        if (!badge.value) return <></>;
        return (
          <CouponBadge
            key={badge.name}
            name={badge.name}
            size="medium"
            value={badge.value}
          />
        );
      })}
      <a
        href={offer.openerOutLink}
        target="_blank"
        title="Zum Shop"
        rel="noreferrer"
      >
        <div className="title mb-[20px] underline">{offer.name}</div>
        <div className="flex items-center">
          {imageUrl && (
            <div className="image-wrapper flex justify-center md:ml-8 lg:ml-8">
              <Image src={imageUrl} width={200} height={200} alt={offer.name} />
            </div>
          )}
          <div className="ml-5 flex flex-col justify-center">
            <div className="flex flex-col">
              <PriceWithCTA
                price={offer.price}
                baseprice={offer.baseprice}
                shippingCost={offer.minShippingCost}
                arrowSize="small"
              />
            </div>
            <div className="shop">
              {offer.shop?.image?.sd && (
                <div className="mt-[15px] mb-[5px]">
                  <Image
                    src={offer.shop.image.sd}
                    width={80}
                    height={30}
                    alt={offer.name}
                    className="shoplogo"
                  />
                </div>
              )}
              {offer.shopRating?.rating && (
                <div className="stars-with-count">
                  <RatingStars
                    size="extrasmall"
                    color="grey"
                    stars={5}
                    width={12}
                    rating={offer.shopRating.rating / 20}
                  />
                  <span className="rating-count -medium">
                    ({offer.shopRating.ratingCount})
                  </span>
                </div>
              )}
              <span className="shopname">
                {offer.merchantName ? offer.merchantName : offer.shop.name}
              </span>
            </div>
          </div>
        </div>
      </a>
      <div className="delivery-wrapper">
        {offer.delivery?.color != null && (
          <Delivery
            isCentered={true}
            isFast={offer?.delivery?.color?.toString() === 'darkgreen'}
            text=""
            hideTextMdDown={false}
            iconSize="small"
            textSize="small"
          />
        )}
        {offer.shop?.shippingNames != null && (
          <span className="leading-4">
            {offer.deliveryText}
            {offer.shop?.shippingNames.length > 0 && (
              <>, mit {offer.shop?.shippingNames.join(', ')}</>
            )}
          </span>
        )}

        {offer.hasFreeReturnShipping && (
          <>
            <ReturnIcon className="icon" width="20" height="20" />
            <div>Rücksendung {offer.freeReturnDays} Tage kostenfrei</div>
          </>
        )}
      </div>
      {offer.voucherCode && (
        <div className="voucher-wrapper">
          <div className="flex items-center">
            <ExclamationIcon className="icon" width="16" height="16" />
            <strong>Vergiss deinen Gutscheincode nicht:</strong>
          </div>
          <div className="voucher">{offer['voucherCode']}</div>
        </div>
      )}
      <a
        href={offer.openerOutLink}
        target="_blank"
        title="Zum Shop"
        rel="noreferrer"
        className="btn-basic -full-width -pink -with-icon -large my-4"
        data-gtm="offer-details-clickout"
      >
        Zum Shop
        <ArrowThickRightIcon
          className="thick-arrow-right"
          width="17"
          height="17"
        />
      </a>
      {shippingCosts && <ShippingCostsTable shippingCosts={shippingCosts} />}
      <div className="details">
        {offer.modified && <div>Daten vom {offer.modified} Uhr</div>}
        {offer.shopInfoUrl && (
          <a
            href={offer.shopInfoUrl}
            className="detailslink"
            target="_blank"
            rel="noreferrer"
          >
            Weitere Details zum Shop
            <ArrowIcon className="arrow grey" width="12" height="12" />
          </a>
        )}
      </div>
    </div>
  );
}
