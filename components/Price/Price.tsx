import ThickArrowRightIcon from '@icons/arrow-thick-right.svg';

type PriceProps = {
  euro: string;
  cent: string;
  size: string;
  baseprice?: string | null;
  hasPrefix: boolean;
  hasArrow: boolean;
  hasDecoration: boolean;
  classes: string;
  crossPrice?: number;
};
export default function Price({
  euro,
  cent,
  baseprice,
  hasPrefix,
  size = 'medium',
  hasArrow,
  hasDecoration,
  classes,
  crossPrice,
}: PriceProps) {
  //TODO: Add types
  const euroIntValue = parseInt(euro.replace('.', ''));

  const prefix = hasPrefix ? <span className="prefix">ab </span> : '';
  const arrow = hasArrow ? (
    <ThickArrowRightIcon className="arrow"></ThickArrowRightIcon>
  ) : (
    ''
  );
  const scale = euroIntValue >= 1000 ? '85' : '100';
  const scaleClasses = classes
    ? classes + ' -scale-' + scale + ' -' + size
    : '-scale-' + scale + ' -' + size;
  const decoration = hasDecoration ? 'hover:underline' : '';

  if (crossPrice && crossPrice > 0) {
    return (
      <div className={'price-with-crossprice'}>
        <span className={'price ' + scaleClasses}>
          {prefix}
          <span className={'value ' + decoration}>
            {euro},<sub>{cent}</sub>
          </span>
          <span className="suffix"> €</span>
          {baseprice && (
            <span className="subline mb-1.5 block text-right text-xs font-normal text-grey-light-10">
              {baseprice}
            </span>
          )}
          {arrow}
        </span>
      </div>
    );
  }
  return (
    <div>
      <span className={'price ' + scaleClasses}>
        {prefix}
        <span className={'value ' + decoration}>
          {euro},<sub>{cent}</sub>
        </span>
        <span className="suffix"> €</span>
        {baseprice && (
          <span className="subline mb-1.5 block text-right text-xs font-normal text-grey-light-10">
            {baseprice}
          </span>
        )}
        {arrow}
      </span>
    </div>
  );
}
