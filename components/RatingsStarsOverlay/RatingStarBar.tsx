import StarFull from '@icons/star-full.svg';

type RatingStarBarProps = {
  stars: number;
  value: number;
  total: number;
};
export default function RatingStarBar({
  stars,
  value,
  total,
}: RatingStarBarProps) {
  const percentage = (value / total) * 100;

  return (
    <div className=" my-1 mx-0 grid w-full grid-cols-8 text-center">
      <div className="col-span-1 text-base leading-3">
        {stars}
        <StarFull className="ml-1" fill="#646464" width="14" height="14" />
      </div>
      <div className="col-span-6 ml-1 mt-1 flex h-2.5 rounded bg-gray-400  ">
        <div
          className="rounded-l rounded-r-none bg-amazon-fill "
          data-count={value}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="col-span-1 text-xs">{value}</div>
    </div>
  );
}
