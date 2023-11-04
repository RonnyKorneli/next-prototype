import { useSelector } from 'react-redux';
import {
  selectPriceDeRank,
  selectProductCategoryRank,
  selectProductMaxPrice,
  selectProductMinPrice,
  selectProductParentCategoryName,
} from '@store/server/ProductSlice';

export function ProductDetailsHeader({
  showRanking = true,
}: {
  showRanking?: boolean;
}) {
  const preisDeRank = useSelector(selectPriceDeRank);
  const productCategoryRank = useSelector(selectProductCategoryRank);
  const productParentCategoryName = useSelector(
    selectProductParentCategoryName
  );
  const productMaxPrice = useSelector(selectProductMaxPrice);
  const productMinPrice = useSelector(selectProductMinPrice);

  return (
    <>
      {showRanking && (
        <p className="px-[7%]">
          <strong>Preis.de-Rang: </strong>
          {preisDeRank}
          <strong> | Nr. {productCategoryRank} in der Kategorie: </strong>
          {productParentCategoryName}
          {productMaxPrice && productMinPrice && (
            <span>
              <strong> | Preisspanne: </strong>
              {productMinPrice.formattedPrice} -{' '}
              {productMaxPrice.formattedPrice}
            </span>
          )}
        </p>
      )}
    </>
  );
}
