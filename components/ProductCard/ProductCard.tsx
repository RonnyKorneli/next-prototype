import Image from 'next/image';
import ArrowGreene from '@icons/arrowGreene.svg';
import CheckMark from '@icons/check.svg';
import React from 'react';
import { ProductImage } from '@graphql/generated/client';

type ProductCardProps = {
  currentProdId?: string | null;
  name: string;
  url: string;
  image?: Pick<ProductImage, 'sd' | 'hd' | 'height' | 'width'>;
  id?: string | null;
  price?: string | null;
  productVariants: boolean;
  firstCard: boolean;
};
export default function ProductCard({
  currentProdId,
  name,
  url,
  image,
  id,
  price,
  productVariants,
  firstCard,
}: ProductCardProps) {
  const heightAndWidth = productVariants
    ? 'w-[220px] h-[300px]'
    : 'h-[300px] w-[220px]';
  const hover = productVariants ? 'hover:scale-110 ease-in duration-150' : '';
  const failureImageUrl =
    process.env.IMAGE_SERVER_URL + `/p/${id}/400x400/25/1/no-image.png`;
  const failureImage = (
    <Image
      src={failureImageUrl}
      alt=""
      height={200}
      width={200}
      className={`max-h-[170px] w-auto ${hover}`}
    />
  );

  return (
    <a
      href={url}
      className={`card relative m-[15px] ${heightAndWidth} flex flex-col items-center border text-center`}
    >
      {productVariants && currentProdId === id && !firstCard ? (
        <div className="absolute top-[-7px] right-[-7px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-blue-light-20 ">
          <CheckMark className="h-[16px] w-[16px] fill-blue" />
        </div>
      ) : (
        <></>
      )}
      {productVariants ? (
        <header className="mt-[10px]"></header>
      ) : (
        <header className="mb-[30px] h-[20px] pt-[10px]">
          <span className="text-[.75rem] underline">{name}</span>
        </header>
      )}
      {image ? (
        <Image
          src={image.sd ?? ''}
          alt={name ?? ''}
          height={200}
          width={200}
          className={` h-[200px] w-auto ${hover}`}
        />
      ) : (
        failureImage
      )}
      {productVariants ? (
        <div className=" mt-[20px] mb-[15px] text-sm">{name}</div>
      ) : null}
      {firstCard ? (
        <div className="pointer-events-none w-3/4 border-solid border-blue py-[0.19rem] text-[0.75rem] leading-3 text-blue">
          Zur Modellübersicht
        </div>
      ) : null}
      <div
        className={
          productVariants
            ? 'absolute bottom-1 flex w-full justify-center'
            : 'absolute bottom-4 flex w-full justify-center'
        }
      >
        <div className="pt-[10px]">
          <span
            className={
              productVariants
                ? '"text-[1rem] " font-bold'
                : 'text-[1.3rem] font-bold'
            }
          >
            {price}
          </span>
        </div>
        <span className={`fill-[#9acc33] pt-[10px]`}>
          {!firstCard ? (
            <ArrowGreene className={productVariants ? 'w-7' : 'w-10'} />
          ) : null}
        </span>
      </div>
    </a>
  );
}
