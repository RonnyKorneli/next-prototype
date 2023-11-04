import ArrowThickRight from '@icons/arrow-thick-right.svg';
import ArrayBackground from '@icons/arrow-background.svg';
import Price from '@components/Price/Price';
import { Maybe, PriceFormat } from '@graphql/generated/client';
type PriceWithCTAProps = {
  baseprice?: string | null;
  arrowSize?: string;
  onClickEvent?: () => void;
  colorVariant?: string;
} & {
  price: Pick<PriceFormat, 'euro' | 'cent'>;
  shippingCost: Maybe<PriceFormat> | undefined;
};
export default function PriceWithCTA({
  price,
  baseprice,
  shippingCost,
  arrowSize = 'big',
  colorVariant = '',
  onClickEvent,
}: PriceWithCTAProps) {
  return (
    <div className={'price-with-cta ' + colorVariant}>
      <span className="total-amount">
        {price.euro && price.cent && (
          <Price
            classes={colorVariant}
            size="large"
            euro={price.euro}
            cent={price.cent}
            baseprice={baseprice}
            // crossPrice={price.old} seems not to exists in object
            hasArrow={false}
            hasDecoration={false}
            hasPrefix={false}
          />
        )}
        <span
          className="shipping"
          data-gtm="offer-details-grid-open"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClickEvent && onClickEvent();
          }}
        >
          {shippingCost &&
          shippingCost.formattedPrice &&
          shippingCost.price &&
          shippingCost.price > 0 ? (
            <>Versand ab {shippingCost.formattedPrice}</>
          ) : (
            <>Versand frei</>
          )}
        </span>
      </span>
      <span
        className={
          arrowSize === 'small'
            ? 'arrow-button -pink -small'
            : 'arrow-button -pink'
        }
      >
        {arrowSize === 'small' ? (
          <ArrowThickRight className="thick-arrow-right ml:0" />
        ) : (
          <>
            <ArrayBackground className="arrow-background hidden lg:block" />
            <ArrowThickRight className="thick-arrow-right lg:hidden" />
          </>
        )}
      </span>
    </div>
  );
}
