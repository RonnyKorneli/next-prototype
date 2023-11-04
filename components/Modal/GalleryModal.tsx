import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import PlayIcon from '@icons/play_circle.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ArrowIcon from '@icons/arrow.svg';
import {
  selectAllImages,
  selectProductName,
  selectProductVideos,
} from '@store/server/ProductSlice';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function GalleryModal() {
  const images = useSelector(selectAllImages);
  const productName = useSelector(selectProductName);
  const productVideos = useSelector(selectProductVideos);
  const [activeTab, setActiveTab] = useState(1);
  const [isImage, setImage] = useState(images[0]?.hd);
  const listRef = useRef<HTMLDivElement>(null);
  const galleryTabsTitles = () => {
    const imageTitle = images.length > 1 ? 'Bilder' : 'Bild';
    const videoTitle = productVideos.length > 1 ? 'Videos' : 'Video';
    const tabsTitles = {
      imageTitle: imageTitle,
      videoTitle: videoTitle,
    };
    return tabsTitles;
  };
  const galleryTitle = galleryTabsTitles();
  const scrollDown = () => {
    listRef.current!.style.transform = 'translateY(-90px)';
  };
  const scrollUp = () => {
    listRef.current!.style.transform = 'translateY(2px)';
  };
  return (
    <div className="relative z-20 block max-w-5xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4 lg:w-[64rem]">
      <div className="max-h-[634px] overflow-y-auto sm:pb-2.5 md:static">
        <section>
          <div>
            {images && productVideos.length > 0 ? (
              <>
                <button
                  id="1"
                  role="tab"
                  onClick={() => setActiveTab(1)}
                  aria-selected={activeTab === 1 ? 'true' : 'false'}
                  className={
                    'w-1/2 border-t-0 border-solid bg-white text-base text-grey ' +
                    'cursor-pointer border-r-0 border-l-0 px-0 pt-[5px]' +
                    (activeTab === 1
                      ? 'border-b-[3px] border-blue font-bold text-blue'
                      : 'border-b border-grey-light-40 hover:border-blue hover:font-bold hover:text-blue')
                  }
                >
                  {galleryTitle['imageTitle']} ({images.length})
                </button>
                <button
                  id="2"
                  role="tab"
                  onClick={() => setActiveTab(2)}
                  aria-selected={activeTab === 0 ? 'true' : 'false'}
                  className={
                    'w-1/2 border-t-0 border-solid bg-white text-base text-grey ' +
                    'cursor-pointer border-r-0 border-l-0 px-0 pt-[5px]' +
                    (activeTab === 2
                      ? 'border-b-[3px] border-blue font-bold text-blue'
                      : 'border-b border-grey-light-40 hover:border-blue hover:font-bold hover:text-blue')
                  }
                >
                  {galleryTitle['videoTitle']} ({productVideos.length})
                </button>
              </>
            ) : (
              ''
            )}
          </div>
          <div className={activeTab === 1 ? 'block' : 'hidden'}>
            <div
              id="galleryModalImageSlider"
              className="mx-0 mt-[30px] mb-5 px-0 py-[60px] md:static md:hidden lg:py-1"
            >
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  dynamicBullets: true,
                }}
                className="swiper-wrapper"
              >
                {images.map((image, index) => {
                  if (!image) {
                    return <></>;
                  }
                  if (!image.sd) {
                    return <></>;
                  }
                  if (image) {
                    return (
                      <SwiperSlide className="flex justify-center" key={index}>
                        <Image
                          alt={productName}
                          src={image.sd}
                          width="120"
                          height="200"
                          className="max-h-[200px]"
                        />
                      </SwiperSlide>
                    );
                  }
                })}
                {images.length > 1 ? (
                  <div className="pt-48">
                    <div className="swiper-pagination"></div>
                  </div>
                ) : null}
              </Swiper>
            </div>
            {/*//TODO fix image rendering for one image*/}
            <div className="hidden md:my-12 md:flex md:items-center md:justify-center">
              {images.length > 1 ? (
                <>
                  <div className="relative py-6 pl-24">
                    <div className="overflow-hidden">
                      <div
                        className="flex max-h-[350px] transform flex-col duration-300"
                        ref={listRef}
                      >
                        {images.map((image, index) => {
                          if (!image) {
                            return <></>;
                          }
                          if (!image.sd) {
                            return <></>;
                          }
                          return (
                            <div
                              key={index}
                              className="mb-2 flex h-24 w-24 cursor-pointer items-center justify-center border border-solid border-grey-light-30"
                              onMouseOver={() => setImage(image.hd)}
                            >
                              <Image
                                alt={productName}
                                src={image.sd}
                                width="60"
                                height="60"
                                className="pointer-events-none p-1"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {images.length > 4 ? (
                      <>
                        <div
                          onClick={scrollUp}
                          className="absolute right-auto left-[68%] top-0 flex  h-5 w-7 rotate-[-0.25turn] items-center justify-center"
                        >
                          <ArrowIcon className="fill-grey-light-10" />
                        </div>
                        <div
                          onClick={scrollDown}
                          className="absolute right-auto -bottom-3 left-[68%] top-auto flex h-5 w-7 rotate-[0.25turn] items-center justify-center"
                        >
                          <ArrowIcon className="fill-grey-light-10" />
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="flex h-[450px] w-[600px] items-center justify-center">
                    {isImage && (
                      <Image
                        alt={productName}
                        src={isImage}
                        width="300"
                        height="450"
                        className="h-auto"
                      />
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </div>
          {/*//TODO fix thumbnails for video*/}
          <div className={activeTab === 2 ? 'block' : 'hidden'}>
            <div
              id="galleryModalVideoSlider"
              className="mx-0 mt-[30px] mb-5 max-w-full px-0 py-[60px] md:static md:hidden lg:pt-1"
            >
              <div className="swiper-wrapper static">
                {productVideos.map((video, index) => {
                  if (video != null) {
                    return (
                      <div
                        key={index}
                        className="flex justify-center "
                        data-link={video['url']}
                        data-video-title="Video"
                      >
                        <iframe
                          src={video.url}
                          id="video-iframe"
                          width="853px"
                          height="480px"
                          className="h-[calc(100vw_/_1.77)] w-[80vw] md:max-h-[480px] md:w-11/12"
                          allow="fullscreen"
                        ></iframe>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="hidden md:my-12 md:flex md:items-center md:justify-around">
              {productVideos.length > 0 && (
                <>
                  <div className="relative py-6">
                    <div className="flex flex-col">
                      {productVideos.map((video, index) => {
                        if (video) {
                          return (
                            <div
                              key={index}
                              className="video-thumbnail flex h-[45px] w-[45px] cursor-pointer
                                items-center justify-center border border-solid border-grey-light-30"
                            >
                              <Image
                                className="relative p-0"
                                alt={productName}
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
                    </div>
                  </div>
                </>
              )}
              {productVideos.map((video, index) => {
                if (video) {
                  return (
                    <div
                      key={index}
                      className="flex h-[450px] w-[600px] items-center justify-center"
                      data-link={video['url']}
                      data-video-title="Video"
                    >
                      <iframe
                        src={video.url}
                        id="video-iframe"
                        width="853px"
                        height="480px"
                        allow="fullscreen"
                      ></iframe>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
