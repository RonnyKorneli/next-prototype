import React, { useRef } from 'react';
import Image from 'next/image';
import Delivery from '../../Delivery';
import Price from '../../Price/Price';
import { FirstResultsetOffer } from '../../../styles/types/getOffers';
import InfoIcon from '@icons/tooltip-filled.svg';
import LensIcon from '@icons/add-magnefiy-glass.svg';

export default function Offer({ offer }: { offer: FirstResultsetOffer }) {
  const aTag = useRef<HTMLAnchorElement>(null);

  return (
    <a
      href="/opener_out.htm?AID=3471787383586816777&PID=7079&CID=0&QID=0&AKT=search&SEC=firstResultset&POS=0&EL=grid&B=0&V=0&ref_log_id=dc880af6-51e2-45a3-a58f-bd001c88d6a2-1671706612&SID=82575091-0c63-4b6a-b236-3737d805320a"
      ref={aTag}
      target="_blank"
      rel="noreferrer"
      title={offer.title}
      className="offer card group flex flex-col items-center p-[5px] text-center"
    >
      <div className="image my-[5px] flex h-[135px] w-[125px] place-content-center">
        <Image
          src={offer.image_url}
          alt="Picture of the author"
          style={{ objectFit: 'scale-down' }}
          width={135}
          height={125}
        />
      </div>

      <span className="min-h-[25px] break-all text-[11px] font-bold leading-[12px] underline line-clamp-2">
        <span
          className="absolute top-1 right-1 z-10 hidden cursor-pointer isHoverable:group-hover:inline"
          data-gtm="sem-open-details"
        >
          <LensIcon
            className="lense grey pointer-events-none"
            width="30"
            height="30"
          />
        </span>

        {offer.title}
      </span>
      <div className="mb-[7px] mt-[3px]">
        <Price
          classes="-pink -same-size"
          size="mini"
          euro={offer.price.split('.')[0]}
          cent={offer.price.split('.')[1]}
          baseprice={offer.baseprice}
          hasArrow={false}
          hasDecoration={false}
          hasPrefix={false}
        />
      </div>
      {offer.shipping_costs == '0.0' ? (
        <span className="text-tiny text-grey">Kostenloser Versand</span>
      ) : (
        <span className="text-tiny leading-[14px] text-grey">
          Versand ab: {Number(offer.shipping_costs).toFixed(2) + ' €'}
        </span>
      )}
      <span
        className="flex items-center justify-center text-tiny text-grey line-clamp-1"
        title={'zum Shop' + offer.shopname}
      >
        <div className="tooltip mr-[4px] inline">
          <InfoIcon
            className="icon relative top-[1px] mt-0 mr-0 cursor-pointer fill-current text-grey hover:text-pink"
            width="12"
            height="12"
          />
        </div>
        {offer.shopname}
      </span>
      <div
        onMouseEnter={() => {
          if (aTag && aTag.current && aTag.current.title) {
            aTag.current.title = '';
          }
        }}
        onMouseLeave={() => {
          if (aTag && aTag.current && aTag.current.title) {
            aTag.current.title = offer.title;
          }
        }}
      >
        <Delivery
          color="darkgreen"
          text="schnell lieferbar"
          iconSize="small"
          textSize="small"
        />
      </div>
    </a>
  );
}
