import DeliveryIcon from '@icons/deliver_new.svg';
import FastDeliveryIcon from '@icons/deliver_fast_new.svg';

type DeliveryProps = {
  isCentered?: boolean;
  hideTextMdDown?: boolean;
  isFast?: boolean;
  textSize: 'small' | 'medium';
  iconSize: 'small' | 'large';
  text?: string;
  color?: string;
};
export function Delivery({
  hideTextMdDown = false,
  textSize = 'small',
  text = '',
  iconSize = 'small',
  isFast,
}: DeliveryProps) {
  const iconSizes = {
    small: 'w-5 h-5 mt-0',
    large: 'w-5 h-5 mt-0',
  };
  const textSizes = {
    small: 'text-xs',
    medium: 'text-sm',
  };
  return (
    <div
      className={`flex w-full  items-center justify-start text-[10px] md:flex-row lg:items-start ${
        hideTextMdDown ? ' hidden lg:block' : ''
      }`}
    >
      {isFast ? (
        <FastDeliveryIcon
          className={`fill-green stroke-green-dark-20 ${iconSizes[iconSize]}`}
        />
      ) : (
        <DeliveryIcon
          className={`fill-grey stroke-grey ${iconSizes[iconSize]}`}
        />
      )}
      {text && (
        <span className={`text ml-3 text-grey ${textSizes[textSize]} `}>
          {text}
        </span>
      )}
    </div>
  );
}
