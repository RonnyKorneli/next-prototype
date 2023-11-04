import StarIconFull from '@icons/star-full.svg';
import StarIconHalf from '@icons/star-half.svg';
import StarIconEmpty from '@icons/star-empty.svg';

type RatingStarsProps = {
  size: 'extrasmall' | 'small' | 'extralarge';
  color: 'grey' | 'amazon' | 'pink';
  stars: number;
  rating: number;
  width: number;
};
export default function RatingStars({
  size,
  color,
  width,
  rating,
  stars,
}: RatingStarsProps) {
  const sizeClasses = {
    extrasmall: 'w-3 h-3',
    small: 'w-3.5 h-3.5',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
    extralarge: 'w-6 h-6 stroke-width-0.5',
  };
  const colorClasses = {
    amazon: 'stroke-amazon-fill fill-amazon-fill',
    grey: 'stroke-grey fill-grey',
    pink: 'stroke-pink fill-pink',
  };
  return (
    <span
      className="inline-flex items-center justify-end"
      data-component="rating-stars"
    >
      {Array.from({ length: stars }, (_, i) => {
        if (rating > i) {
          return (
            <StarIconFull
              className={`${colorClasses[color]}  ${sizeClasses[size]} my-px mx-px stroke-1 `}
              width={width}
              key={`star-icon-full-${i}`}
            />
          );
        }
        // @fixme display star half
        if (rating > i && rating < i + 1) {
          return (
            <StarIconHalf
              className={` ${sizeClasses[size]} ${colorClasses[color]} my-px mx-px stroke-1`}
              width={width}
              key={`star-icon-full-${i}`}
            />
          );
        } else {
          return (
            <StarIconEmpty
              className={`${sizeClasses[size]} ${colorClasses[color]} my-px mx-px stroke-1 `}
              width={width}
              key={`star-icon-full-${i}`}
            />
          );
        }
      })}
    </span>
  );
}
