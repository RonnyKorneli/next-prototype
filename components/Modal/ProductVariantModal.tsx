import {
  selectProductId,
  selectProductVariantsSorted,
  selectParentProduct,
} from '../../store/server/ProductSlice';
import ProductCard from '@components/ProductCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function ProductVariantModal() {
  const productId = useSelector(selectProductId);
  const productVariants = useSelector(selectProductVariantsSorted(productId));
  const parentProduct = useSelector(selectParentProduct);

  if (!productId) {
    throw new Error('There are no product id');
  }

  return (
    <div>
      <div className="w-full overflow-auto pt-6 md:w-[1000px]">
        <span className="text-1 ml-[24px] text-blue">
          Wähle eine Variante aus:
        </span>
        <div className="flex w-[100%] flex-wrap justify-center">
          {parentProduct && parentProduct.images && parentProduct.images[0] ? (
            <ProductCard
              key={productId}
              currentProdId={productId}
              id={productId}
              url={parentProduct.url}
              name={parentProduct.name}
              image={parentProduct.images[0]}
              price={null}
              productVariants={true}
              firstCard={true}
            />
          ) : null}
          {productVariants
            ? productVariants.map((item) => {
                if (!item) return <></>;
                if (!item.images) return <></>;
                if (item.images.length === 0) return <></>;
                if (!item.images[0] || !item.images[0].hd) return <></>;
                if (!item.variantName) return <></>;
                return (
                  <ProductCard
                    key={item.id}
                    currentProdId={productId}
                    id={item.id}
                    url={item.url}
                    name={item.variantName}
                    image={item.images[0]}
                    price={item?.minPrice?.euro + ',' + item?.minPrice?.cent}
                    productVariants={true}
                    firstCard={false}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
