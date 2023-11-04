import { useState } from 'react';
import RatingsStars from '@components/RatingsStars';
import AmazonLogo from '@icons/amazon-de.svg';
import RatingStarBar from '@components/RatingsStarsOverlay/RatingStarBar';
import { useSelector } from 'react-redux';
import { selectAmazonRating } from '@store/server/ProductSlice';

export default function RatingStarOverlay() {
  const amazonRating = useSelector(selectAmazonRating);
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseOver = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  if (!amazonRating) {
    return <></>;
  }
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block "
    >
      <div className="flex items-center">
        <RatingsStars
          size="small"
          stars={5}
          rating={amazonRating.averageRating || 0}
          color="amazon"
          width={14}
        />
        &nbsp;
        <span className="rating-count -medium">
          ({amazonRating?.ratingCount})
        </span>
      </div>
      {isOpen && (
        <div
          className="visible absolute top-[22px] left-[-91.5px] z-[1] my-1 flex w-[300px] flex-col
             items-center rounded border border-solid border-black/20 bg-white p-2.5 text-4xl shadow-md"
        >
          <span
            className="absolute top-[-11px] left-[50%] -ml-3 block h-0 w-0 border-x-[11px] border-b-[11px]
            border-t-0 border-solid border-x-black/0 border-t-black border-b-black/25 text-transparent
            after:absolute after:top-[1px] after:ml-[-10px] after:block after:border-[10px] after:border-t-0
              after:border-solid after:border-black/0 after:border-b-white after:content-[''] "
          ></span>
          {Number(amazonRating?.averageRating).toFixed(1)}
          <RatingsStars
            size="extralarge"
            stars={5}
            rating={amazonRating.averageRating || 0}
            width={25}
            color="amazon"
          />
          <div className="mx-0 mt-0 mb-1 text-xs ">
            {amazonRating?.ratingCount} &nbsp;
            {amazonRating?.ratingCount === 1 ? 'Bewertung' : 'Bewertungen'} bei
            <span className="mt-[3px] ml-[5px] inline-block h-5 w-12 pt-[3px] align-middle ">
              <AmazonLogo />
            </span>
          </div>
          <RatingStarBar
            stars={5}
            value={amazonRating.fiveStarRatingCount || 0}
            total={amazonRating.ratingCount || 0}
          />
          <RatingStarBar
            stars={4}
            value={amazonRating.fourStarRatingCount || 0}
            total={amazonRating.ratingCount || 0}
          />
          <RatingStarBar
            stars={3}
            value={amazonRating.threeStarRatingCount || 0}
            total={amazonRating.ratingCount || 0}
          />
          <RatingStarBar
            stars={2}
            value={amazonRating.twoStarRatingCount || 0}
            total={amazonRating.ratingCount || 0}
          />
          <RatingStarBar
            stars={1}
            value={amazonRating.oneStarRatingCount || 0}
            total={amazonRating.ratingCount || 0}
          />
          <div className="my-2.5 inline-block text-center text-xs font-normal">
            Letztes Update:
            {amazonRating.lastAmazonCheckFormatted}
            {amazonRating.ratingUrl && (
              <a
                className="mt-2.5 block underline"
                href={amazonRating.ratingUrl}
              >
                Rezensionen auf Amazon lesen
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
