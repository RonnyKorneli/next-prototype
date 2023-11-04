import { useSelector } from 'react-redux';
import { selectBestOffer, selectSavingRate } from '@store/server/ProductSlice';
import Trend from '@components/PriceTrend/Trend';
import AlarmButton from '@components/Buttons/AlarmButton';
import PriceWithCTA from '@components/PriceWithCTA';
import Delivery from '@components/Delivery';
import TooltipIcon from '@icons/tooltip-filled.svg';

export function PriceTrendInnerBox() {
  const savingRate = useSelector(selectSavingRate);
  const bestOffer = useSelector(selectBestOffer);

  return (
    <div className="mr-[5%] flex flex-col leading-6 lg:m-0 lg:flex-row">
      <div className="max-w-screen-md lg:max-w-[74%]">
        <Trend />
      </div>
      <div className="my-2 ml-4 flex flex-col border-0 border-l-grey-light-40 pl-4 md:flex-row md:border-l md:border-solid lg:flex-col">
        <div className="md:w-5/12 lg:w-auto">
          <AlarmButton id="alarm-activate-trend" />
          <div className="flex flex-row md:flex-col lg:flex-col">
            <div className="mt-2 w-56 md:w-auto">
              <p className="m-0 p-0 font-bold">Aktuelle Ersparnis</p>
              <p className="m-0 p-0 text-xs">
                gegenüber unserem Durchschnittspreis
              </p>
              <span className="mt-1 w-16 text-2xl font-bold text-green md:w-auto">
                {savingRate} %
              </span>
            </div>
          </div>
        </div>
        <hr className="w-full" />
        {bestOffer &&
          bestOffer.openerOutLink &&
          bestOffer.shopInfoUrl &&
          bestOffer.price &&
          bestOffer.minShippingCost &&
          bestOffer.delivery &&
          bestOffer.delivery.color &&
          bestOffer.delivery.text &&
          bestOffer.shop &&
          bestOffer.shop.name && (
            <div className="mt-2 mb-5 md:w-3/6 lg:w-auto">
              <p className="m-0 p-0 font-bold">Günstigstes Angebot</p>
              <p className="m-0 p-0 text-xs">
                Daten {bestOffer.modified} Uhr *
              </p>
              <a href={bestOffer.openerOutLink} className="no-underline">
                <PriceWithCTA
                  price={bestOffer.price}
                  baseprice={bestOffer.baseprice}
                  shippingCost={bestOffer.minShippingCost}
                  colorVariant="-pink"
                />
              </a>
              <Delivery
                isCentered={false}
                isFast={bestOffer.delivery.color.toString() === 'darkgreen'}
                text={bestOffer.delivery.text}
                iconSize="small"
                textSize="small"
              />
              <a
                href={bestOffer.shopInfoUrl}
                className="shopinfo text-2xs no-underline"
              >
                <TooltipIcon
                  className="ml-1 mr-3 h-4 w-4 fill-grey-light-20 hover:fill-pink"
                  width="16"
                  height="16"
                />
                <span className="name">
                  {bestOffer.merchantName ? (
                    <>
                      {bestOffer.merchantName}
                      <br />
                      via {bestOffer.shop.name}
                    </>
                  ) : (
                    <>{bestOffer.shop.name}</>
                  )}
                </span>
              </a>
            </div>
          )}
      </div>
    </div>
  );
}
