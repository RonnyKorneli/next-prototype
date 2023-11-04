import Image from 'next/image';
import { useSelector } from 'react-redux';
import {
  selectProductDepositInfo,
  selectProductDescription,
  selectProductKeyFacts,
  selectProductNextCategoryRecommendation,
  selectProductRecommendation,
  selectProductShortDescription,
  selectProductWarning,
} from '@store/server/ProductSlice';

export function ProductDetailsDescription({
  showHeadline = true,
}: {
  showHeadline?: boolean;
}) {
  const productWarning = useSelector(selectProductWarning);
  const productDepositInfo = useSelector(selectProductDepositInfo);
  const productKeyFacts = useSelector(selectProductKeyFacts);
  const productShortDescription = useSelector(selectProductShortDescription);
  const productDescription = useSelector(selectProductDescription);
  const productRecommendation = useSelector(selectProductRecommendation);
  const productNextCategoryRecommendation = useSelector(
    selectProductNextCategoryRecommendation
  );
  return (
    <>
      {showHeadline && (
        <h3 className="mx-0 mt-0 mb-4 w-full bg-blue-light-50 py-4 px-[7%] text-sm font-bold leading-normal text-blue">
          Produktbeschreibung
        </h3>
      )}
      <div className="product-description px-[7%]">
        {productWarning && (
          <div>
            <strong>{productWarning.name}:</strong>
            {productWarning.value}
          </div>
        )}
        {productDepositInfo && (
          <div>
            <strong>{productDepositInfo.name}:</strong>
            {productDepositInfo.value}
          </div>
        )}
        {productKeyFacts && productKeyFacts.length > 0 && (
          <div className="relative flex w-full justify-center">
            <div className="info-box -icon -pin">
              <h3 className="headline text-center">Auf einen Blick</h3>
            </div>
          </div>
        )}
        {productShortDescription && (
          <p>
            <strong>{productShortDescription}</strong>
          </p>
        )}
        {productDescription && (
          <div
            className="mb-[50px]"
            dangerouslySetInnerHTML={{
              __html: productDescription,
            }}
          ></div>
        )}
        {productRecommendation &&
          productRecommendation.recommendationLabel?.name && (
            <div className="mb-[50px]">
              <div className="flex flex-row items-center border-t border-l border-r border-b-0 border-solid border-grey-light-30 bg-grey-light-50 p-2 font-bold">
                <div className="mr-[5px] flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-solid border-grey"></div>
                <span className="pointer-events-none no-underline">
                  {productRecommendation.recommendationLabel?.name}
                  in unserer Kaufberatung von
                  {productRecommendation.createdFormatted}
                </span>
              </div>
              <div className="border border-solid border-grey-light-30 px-[3%] pt-[3%] pb-[1%]">
                {productRecommendation.content}
                {productNextCategoryRecommendation &&
                  productNextCategoryRecommendation.editor?.image &&
                  productNextCategoryRecommendation.category?.name && (
                    <div className="mt-[15px] flex flex-row items-center">
                      <Image
                        src={productNextCategoryRecommendation.editor.image}
                        alt="Autor"
                        className="mr-[10px] rounded-full"
                        width="36"
                        height="36"
                        loading="lazy"
                      />
                      <span>
                        {productNextCategoryRecommendation.editor.name}- Dein
                        Kaufberater in
                        {productNextCategoryRecommendation.category.name}
                      </span>
                    </div>
                  )}
              </div>
            </div>
          )}
      </div>
    </>
  );
}
