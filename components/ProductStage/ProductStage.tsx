import Image from 'next/image';
import { ModalTypes, openModal } from '@components/Modal/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef, RefObject } from 'react';
import WishlistStatusButton from '@components/Wishlist/StatusButton';
import AlarmButton from '@components/Buttons/AlarmButton';
import TrendCompact from '@components/PriceTrend/TrendCompact';
import PlayIcon from '@icons/play_circle.svg';
import EnlargerIcon from '@icons/enlarger.svg';
import ArrowIcon from '@icons/arrow.svg';
import CollapseButton from '@icons/collapseButton.svg';
import ArrowRight from '@icons/arrowRight.svg';
import AlarmIcon from '@icons/alarmIcon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useWindowSize } from '../../hooks/screenSize';
import 'swiper/scss';
import 'swiper/scss/navigation';
import TooltipIcon from '@icons/tooltip-outline.svg';
import Tooltip from '@components/Tooltip';
import RatingStarOverlay from '@components/RatingsStarsOverlay';
import {
  selectAllImages,
  selectProductDescription,
  selectProductId,
  selectProductName,
  selectProductSubline,
  selectProductVideos,
  selectTestContext,
  selectVariantCount,
  selectAmazonRating,
} from '@store/server/ProductSlice';

export default function ProductStage() {
  const images = useSelector(selectAllImages);
  const productId = useSelector(selectProductId);
  const productName = useSelector(selectProductName);
  const amazonRating = useSelector(selectAmazonRating);
  const productVideos = useSelector(selectProductVideos);
  const testContext = useSelector(selectTestContext);
  const variantCount = useSelector(selectVariantCount);
  const productSubline = useSelector(selectProductSubline);
  const productDescription = useSelector(selectProductDescription);
  const dispatch = useDispatch();
  const size = useWindowSize();
  const isSmallWindow = size.width != undefined && size.width < 640;
  const [isImage, setImage] = useState(images[0]?.hd);
  const container = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  let lens = useRef<HTMLDivElement>(null);
  let result = useRef<HTMLDivElement>(null);
  const swiper = {
    modules: [Navigation],
    loop: true,
    autoHeight: true,
    speed: 300,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  };
  const clickProductVariants = () => {
    const modalConfig = {
      modalType: ModalTypes.productVariant,
      hasFooter: true,
      title: 'Produktvarianten',
    };
    dispatch(openModal(modalConfig));
  };
  const clickReadMore = () => {
    const modalConfig = {
      modalType: ModalTypes.productDetails,
      hasFooter: true,
      title: 'Produktdetails / Produktinformation',
      modalData: null,
    };
    dispatch(openModal(modalConfig));
  };
  const clickTrend = () => {
    const modalConfig = {
      modalType: ModalTypes.trendModal,
      hasFooter: true,
      title: 'Preisverlauf',
      modalData: null,
    };
    dispatch(openModal(modalConfig));
  };
  const openGallery = () => {
    const modalConfig = {
      modalType: ModalTypes.galleryModal,
      hasFooter: true,
      title: productName ? productName : '',
      modalData: null,
    };
    dispatch(openModal(modalConfig));
  };
  function getMediaCount() {
    let countMore = 0;
    if (images.length > 2) {
      countMore = countMore + images.length - 2;
    }
    if (images.length > 1) {
      countMore = countMore + images.length - 1;
    }
    return countMore;
  }
  const countMoreMedia = getMediaCount();
  function zoomImage() {
    if (container) {
      // Set up Zoom
      container.current?.addEventListener('mouseenter', () => {
        if (!img.current || !lens.current || !result.current) {
          return;
        }
        lens.current.style.display = 'block';
        const bigImage = img.current.src;
        // Calculate the ratio between result DIV and lens:
        const cx = result.current.offsetWidth / lens.current.offsetWidth;
        const cy = result.current.offsetHeight / lens.current.offsetHeight;
        // Set background properties for the result DIV:
        result.current.style.display = 'block';
        result.current.style.backgroundImage = "url('" + bigImage + "')";
        result.current.style.backgroundRepeat = 'no-repeat';
        result.current.style.backgroundSize =
          img.current.width * cx + 'px ' + img.current.height * cy + 'px';
        img.current.addEventListener('mousemove', (event) => {
          const movedLens = moveLens(event, img, lens, result, cx, cy);
          if (!movedLens) {
            return;
          }
          lens = movedLens.lens;
          result = movedLens.result;
        });
      });
      // Remove Zoom
      container.current?.addEventListener('mouseleave', () => {
        if (!img.current || !lens.current || !result.current) {
          return;
        }
        img.current.removeEventListener('mousemove', (event) => {
          if (!lens.current || !result.current) {
            return;
          }
          const cx = result.current.offsetWidth / lens.current.offsetWidth;
          const cy = result.current.offsetHeight / lens.current.offsetHeight;
          const movedLens = moveLens(event, img, lens, result, cx, cy);
          if (!movedLens) {
            return;
          }
          lens = movedLens.lens;
          result = movedLens.result;
        });
        result.current.style.display = 'none';
        lens.current.style.display = 'none';
      });
    }
  }
  function moveLens(
    event: MouseEvent,
    img: RefObject<HTMLImageElement>,
    lens: RefObject<HTMLDivElement>,
    result: RefObject<HTMLDivElement>,
    cx: number,
    cy: number
  ) {
    event.preventDefault();
    if (!img.current) {
      return;
    }
    // Get the cursor's x and y positions:
    if (!img.current || !lens.current || !result.current) {
      return;
    }
    event = event || Event;
    const rect = img.current.getBoundingClientRect();
    const cursorx = event.pageX - rect.left - window.scrollX;
    const cursory = event.pageY - rect.top - window.scrollY;
    // Calculate the position of the lens:
    let x = cursorx - lens.current.offsetWidth / 2;
    let y = cursory - lens.current.offsetHeight / 2;
    // Prevent the lens from being positioned outside the image:
    if (x > img.current.width - lens.current.offsetWidth) {
      x = img.current.width - lens.current.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.current.height - lens.current.offsetHeight) {
      y = img.current.height - lens.current.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    // Set the position of the lens:
    lens.current.style.left = x + 'px';
    lens.current.style.top = y + 'px';
    // Display the lens:
    result.current.style.backgroundPosition =
      '-' + x * cx + 'px -' + y * cy + 'px';
    return { lens: lens, result: result };
  }
  useEffect(() => {
    zoomImage();
  }, [zoomImage]);
  if (!productName) {
    return <></>;
  }
  return (
    <div
      className="mx-0 mt-1.5 mb-0 bg-white py-[5px] px-2.5 md:mt-2 md:py-5 md:px-2.5 lg:flex "
      data-test="product-stage"
    >
      <div
        className="grid grid-rows-[auto_1fr] md:grid-cols-[1fr_2fr]
       lg:m-auto lg:grid-cols-[280px_430px_250px] lg:gap-x-5 xl:grid-cols-[340px_600px_340px] xl:gap-x-10 "
      >
        <section
          className="relative mt-3 h-[150px] min-w-0 justify-end text-center md:col-span-1 md:row-span-2 md:row-start-1 md:row-end-3
          md:mt-0 md:h-auto md:max-h-56 md:w-full lg:flex"
          data-test="gallery"
        >
          <WishlistStatusButton productId={productId} />
          <button
            className="group absolute right-[55px] top-[38px] z-[2] flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-center md:right-[51px] md:top-[34px]  md:w-11 lg:-right-[3px] lg:top-[42px]"
            id="alarm-activate"
            data-set-pricealarm-trigger="1"
            title="Preisalarm aktivieren"
            role="button"
          >
            <span
              className="pointer-events-none inline-flex h-11 w-11 items-center justify-center rounded-[50%] bg-white/90 md:h-10 md:w-10 lg:h-9 lg:w-9 "
              id="alarm-icon"
            >
              <AlarmIcon className="pointer-events-none h-6 w-6 fill-grey-dark-10 transition-transform duration-200 ease-out will-change-transform group-hover:scale-110 md:h-5 md:w-5  " />
            </span>
          </button>
          {isSmallWindow ? (
            <div id="productImageSlider">
              <Swiper {...swiper}>
                {images.map((image, index) => {
                  if (!image) {
                    return <></>;
                  }
                  if (!image.sd) {
                    return <></>;
                  }
                  return (
                    <SwiperSlide key={index}>
                      <Image
                        alt={productName}
                        src={image.sd}
                        width={80}
                        height={80}
                        className="mx-auto max-h-[120px]"
                      />
                    </SwiperSlide>
                  );
                })}
                {productVideos.map((video, index) => {
                  if (video != null) {
                    return (
                      <SwiperSlide className="h-[120px]" key={index}>
                        <Image
                          alt={productName}
                          src={'https:' + video.image}
                          width={120}
                          height={80}
                          className="mx-auto opacity-40"
                        />
                        <div className="mx-0 mt-2 mb-0 text-center text-xs text-grey-light-40">
                          Video
                        </div>
                      </SwiperSlide>
                    );
                  }
                })}
                <ArrowIcon className="swiper-button-prev" />
                <ArrowIcon className="swiper-button-next" />
              </Swiper>
            </div>
          ) : (
            <div className="mr-6 flex w-[50px] flex-col items-center justify-center space-y-2">
              {images.length > 1 && (
                <>
                  {images.map((image, index) => {
                    if (index < 2) {
                      if (!image) {
                        return <></>;
                      }
                      if (!image.sd) {
                        return <></>;
                      }
                      return (
                        <div
                          key={index}
                          onMouseOver={() => setImage(image.hd)}
                          onClick={openGallery}
                          className="flex h-[45px] w-[45px] cursor-pointer
                      items-center justify-center border border-solid border-grey-light-30 opacity-100"
                        >
                          <Image
                            alt={productName}
                            src={image.sd}
                            width={45}
                            height={45}
                            className="pointer-events-none max-h-11 object-contain p-1"
                          />
                        </div>
                      );
                    }
                  })}
                </>
              )}
              {productVideos.map((video, index) => {
                if (!video) {
                  return <></>;
                }
                if (!video.code) {
                  return <></>;
                }
                if (video.url) {
                  return (
                    <div
                      key={index}
                      className="flex h-11 w-11 cursor-pointer items-center justify-center border border-solid border-grey-light-30"
                      onClick={openGallery}
                    >
                      <Image
                        className="pointer-events-none relative p-0 opacity-40 hover:opacity-100"
                        alt={video.code}
                        src={'https:' + video.image}
                        width={45}
                        height={45}
                        loading="lazy"
                      />
                      <PlayIcon
                        className="pointer-events-none absolute fill-current stroke-current text-grey"
                        width="31"
                        height="31"
                      />
                    </div>
                  );
                }
              })}
              {(images.length > 2 || productVideos.length > 1) && (
                <div
                  className="flex h-[45px] w-[45px] cursor-pointer
                  items-center justify-center border border-solid border-grey-light-30 text-sm"
                >
                  + {countMoreMedia}
                </div>
              )}
            </div>
          )}
          <div id="zoom-container" className="hidden items-center lg:flex">
            <div ref={container} className="relative w-[180px] ">
              <div
                className="pointer-events-none absolute hidden h-[56.25px] w-[135px] border border-solid border-black bg-white opacity-40"
                ref={lens}
              />
              {isImage && (
                <Image
                  ref={img}
                  src={isImage}
                  width={225}
                  height={225}
                  alt={productName}
                  className="max-h-[225px] w-auto cursor-crosshair"
                />
              )}
            </div>
            <div
              className="absolute right-[-580px] z-50 h-[225px] w-[540px]"
              ref={result}
            />
          </div>
        </section>
        <section className="relative text-center md:col-start-2 md:col-end-3 md:row-span-1 md:row-end-2 md:text-left">
          <h1
            className="relative mx-0 mt-0 mb-[3px] px-[30px] py-0 text-lg font-bold leading-6 text-grey-dark-10 transition-[height] duration-200 ease-in-out will-change-transform
         md:mb-2.5 md:py-0 md:pl-0 md:pr-4 "
            title={productName}
          >
            {productName}
            <div
              className="absolute right-[5px] -bottom-1.5 hidden cursor-pointer p-1
             md:right-px md:-bottom-1"
            >
              <CollapseButton
                className="h-4 w-4 -rotate-90 fill-grey "
                width="17"
                height="17"
                style={{ width: '17px', height: '17px' }}
              />
            </div>
          </h1>
          <div className="mt-[5px] mb-2 flex items-center justify-center md:my-[7px] md:justify-start  ">
            <span className="inline-block cursor-pointer text-xs font-bold ">
              {amazonRating && (
                <div className="flex items-center">
                  <RatingStarOverlay />
                  <Tooltip
                    text="Preis.de kann nicht sicherstellen, dass veröffentlichte Produktbewertungen von Personen
                        stammen, die die bewertete Ware tatsächlich genutzt oder erworben haben."
                    position="bottom"
                  >
                    <TooltipIcon className="h-3 w-3 cursor-pointer fill-grey" />
                  </Tooltip>
                </div>
              )}
              {testContext?.gradeValue && (
                <div className="mt-1 mb-2 flex items-center justify-center md:justify-start ">
                  <span className="inline-block cursor-pointer text-xs font-bold">
                    Note ∅ {testContext.gradeValue}&nbsp;
                    <a
                      href={'#test_results'}
                      className="font-normal text-grey outline-0"
                      data-gtm="test-results-link"
                    >
                      ({testContext.testCount} Testergebnisse)
                    </a>
                  </span>
                </div>
              )}
            </span>
          </div>
        </section>
        <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:mb-0 md:text-left ">
          <div className="mt-2.5 flex justify-center pb-3 md:mt-[13px] md:mb-[5px] md:justify-start">
            {/*//TODO: refactor btn-lean*/}
            <button
              id="btn-variants"
              className="btn-lean mr-3.5 h-[25px] min-w-[100px] cursor-pointer whitespace-nowrap rounded-sm border-transparent bg-blue-light-10 px-2.5
              py-0 text-center align-middle text-sm text-white no-underline outline-0"
              data-micromodal-trigger="modal-variants"
              onClick={clickProductVariants}
            >
              <span>+{variantCount} </span>
              <span className="md:hidden">Varianten</span>
              <span className="hidden md:inline-block">Produktvarianten</span>
            </button>
            {/*//TODO: refactor to btn-lean*/}
            <button
              id="btn-trend"
              className=" btn-lean mr-3.5 h-[25px] min-w-[100px] cursor-pointer whitespace-nowrap rounded-sm border-transparent bg-blue-light-10 px-2.5
              py-0 text-center align-middle text-sm text-white no-underline outline-0 lg:hidden"
              onClick={() => {
                clickTrend();
              }}
            >
              Preisverlauf <span className="md:hidden" />
              <span className="hidden md:inline-block" />
            </button>
            {/*//TODO: refactor to btn-lean*/}
            <button
              id="btn-details"
              className=" btn-lean mr-3.5 h-[25px] min-w-[100px] cursor-pointer whitespace-nowrap rounded-sm border-transparent bg-blue-light-10 px-2.5
              py-0 text-center align-middle text-sm text-white no-underline outline-0"
              onClick={clickReadMore}
            >
              <span className="md:hidden">Details</span>
              <span className="hidden md:inline-block">Produktdetails</span>
            </button>
          </div>

          {productSubline && productDescription && (
            <article
              id="details_modal_text"
              className="hidden overflow-hidden text-xs leading-[17px] line-clamp-5
              lg:relative lg:m-0 lg:block lg:h-auto lg:max-h-[85px] lg:overflow-hidden "
              data-micromodal-trigger="modal-details"
            >
              <h2 className="mb-0 block text-xs font-bold">{productSubline}</h2>
              <div
                className="mt-1 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: productDescription,
                }}
              />
              <div className="lg:absolute lg:bottom-0 lg:h-20 lg:w-full lg:bg-gradient-to-b lg:from-white/0 lg:to-white" />
            </article>
          )}
          <div className="hidden items-center justify-start lg:flex">
            {/*//TODO: refactor btn-basic*/}
            <button
              id="details_modal_btn"
              className="btn-basic -with-icon -blue -no-border"
              data-micromodal-trigger="modal-details"
              data-gtm="details-continue-open"
              onClick={clickReadMore}
            >
              weiterlesen
              <ArrowRight
                className="pointer-events-none relative top-0 ml-1 fill-blue align-text-bottom"
                width="12"
                height="12"
                style={{ width: '12px', height: '12px' }}
              />
            </button>
          </div>
        </div>

        <section className="hidden lg:col-start-3 lg:col-end-4 lg:row-span-2 lg:row-start-1 lg:row-end-3 lg:block lg:w-[250px] lg:text-center xl:w-[290px]">
          <header
            onClick={() => {
              clickTrend();
            }}
            className="mb-2.5 flex cursor-pointer items-center justify-between"
          >
            <span
              className="block text-xs font-bold text-blue hover:text-blue-light-10 "
              data-gtm="price-trend-open-text"
            >
              Preisverlauf öffnen
            </span>
            <span data-gtm="price-trend-open-icon">
              <EnlargerIcon
                className="pointer-events-none mr-14 fill-blue hover:fill-blue-light-10"
                width="16"
                height="16"
              />
            </span>
          </header>
          <div
            id="priceChart-small"
            className=" max-w-full lg:h-[130px] lg:w-[250px] xl:h-[150px] xl:w-[290px]"
            data-micromodal-trigger="modal-trend"
          >
            <TrendCompact />
          </div>
          <div className="relative -left-[30px]">
            <AlarmButton id="alarm-activate-stage" />
          </div>
        </section>
      </div>
    </div>
  );
}
