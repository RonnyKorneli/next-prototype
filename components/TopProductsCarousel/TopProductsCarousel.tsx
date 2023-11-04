import ProductCard from '@components/ProductCard/ProductCard';
import styles from '@components/TopProductsCarousel/TopProductsCarousel.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, SwiperOptions } from 'swiper';
import Arrow from '@icons/arrow.svg';
import { useSelector } from 'react-redux';
import { selectTopProductsByType } from '@store/server/ProductSlice';

const options: SwiperOptions = {
  breakpoints: {
    20: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 80,
      centeredSlides: false,
    },
    700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: -20,
    },
    890: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: -20,
    },
  },
};

type CarousellProps = {
  title: string;
  type: 'ByTopCategory' | 'ByManufacturer';
  tooltipp?: string;
};
export default function TopProductsCarousel({
  title,
  type,
  tooltipp,
}: CarousellProps) {
  const [customSwiperOptions, setCustomSwiperOptions] =
    useState<SwiperOptions>(options);
  const products = useSelector((state) => selectTopProductsByType(state, type));
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);

  // Why useEffect??  @source<https://github.com/nolimits4web/swiper/issues/5784> & @source<https://nextjs.org/docs/messages/react-hydration-error>
  useEffect(() => {
    const options = {
      breakpoints: {
        '300': {
          slidesPerView: 2,
          spaceBetween: 80,
          centeredSlides: false,
        },
        '645': {
          slidesPerView: 3,
          spaceBetween: -20,
        },
        '890': {
          slidesPerView: 4,
          spaceBetween: -20,
        },
      },
    };
    setCustomSwiperOptions(options);
  }, []);

  const productCarousell: SwiperProps = {
    modules: [Navigation],
    setWrapperSize: true,
    slidesOffsetAfter: -10,
    slidesOffsetBefore: -10,
    preventClicksPropagation: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 100,
    loop: true,
    centeredSlides: false,
    autoHeight: true,
    followFinger: true,
    speed: 300,
    navigation: {
      prevEl: swiperNavPrevRef.current,
      nextEl: swiperNavNextRef.current,
    },
    onInit: (swiper) => {
      if (!swiper.params.navigation) {
        return;
      }
      if (!swiperNavPrevRef.current) {
        return;
      }
      if (!swiperNavNextRef.current) {
        return;
      }
      swiper.navigation.prevEl = swiperNavPrevRef.current;
      swiper.navigation.nextEl = swiperNavNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    ...customSwiperOptions,
  };

  return (
    <section className="relative m-auto mb-12 h-auto w-full max-w-screen-lg border border-t-4 border-solid border-grey-light-40 border-t-grey-light-10 bg-white pb-12 pl-3 pr-3">
      <div className="mb-4 flex items-center border-b border-solid pt-5 pb-4 pl-12">
        <strong>{title}</strong>
        {/* here there should be a tooltip Component */}
      </div>
      <div>
        {customSwiperOptions && products && (
          <Swiper {...productCarousell}>
            {products.map((product) => {
              if (!product) return <></>;
              if (!product.images) return <></>;
              if (product.images.length === 0) return <></>;
              if (!product.images[0] || !product.images[0].hd) return <></>;
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    key={product.id}
                    url={product.url}
                    name={product.name}
                    image={product.images[0]}
                    price={
                      product.minPrice
                        ? product.minPrice.formattedPrice
                        : product.minPriceBStock?.formattedPrice
                    }
                    firstCard={false}
                    productVariants={false}
                  />
                </SwiperSlide>
              );
            })}
            <div
              className="absolute top-1/2 -left-3 z-40 hidden h-9 w-9 -translate-y-1/2 rotate-180 cursor-pointer rounded-full bg-white bg-center bg-no-repeat fill-grey-light-10 p-1 isHoverable:block "
              ref={swiperNavPrevRef}
            >
              <Arrow />
            </div>
            <div
              className="absolute top-1/2 -right-2 z-40 hidden h-9 w-9 -translate-y-1/2 cursor-pointer rounded-full bg-white bg-center bg-no-repeat fill-grey-light-10 p-1 isHoverable:block "
              ref={swiperNavNextRef}
            >
              <Arrow />
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
}
