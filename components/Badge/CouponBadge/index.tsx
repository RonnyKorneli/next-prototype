type BadeTypeProps = {
  value: string;
  size: string;
  name: string;
  isClickable?: boolean;
  isBlue?: boolean;
};
export default function Index({
  size,
  value,
  name,
  isClickable = false,
  isBlue = false,
}: BadeTypeProps) {
  let label, title, badgeClass, sizeClass;

  switch (name) {
    case 'cheapestPrice':
      label = title = 'günstigster Gesamtpreis';
      badgeClass = 'order-3 bg-blue';
      break;
    case 'usedOnly':
      label = title = 'gebraucht';
      badgeClass = 'order-1 bg-yellow';
      break;
    case 'used':
      label = title = 'gebraucht';
      badgeClass = 'order-1 bg-yellow';
      break;
    case 'voucher':
      label = 'Gutscheincode';
      title = 'Gutscheincode anzeigen';
      badgeClass = 'order-2 bg-green';
      break;
    case 'discount':
      label = '-' + value + '%';
      title = value + '% reduziert';
      badgeClass = 'text-center w-12 pl-0 pr-0 bg-pink';
      break;
    case 'ghost':
      label = value;
      title = value;
      badgeClass =
        'font-normal rounded-sm text-grey-light-10 border border-solid border-grey-light-10';
      if (isClickable) {
        badgeClass +=
          ' hover:focus:text-grey-dark-10 hover:focus:border-grey-dark-10';
      }
      if (isBlue) {
        badgeClass += ' text-blue border-blue';
      }
      break;
  }

  switch (size) {
    case 'large':
      sizeClass = 'text-xs mb-1 px-5 pb-1 pt-[3px]';
      break;
    case 'medium':
      sizeClass = 'text-xs leading-[1.7] py-0 px-3'; //TODO: use leading-relaxed line-height: 1.625 ?
      break;
    case 'small':
      sizeClass = 'text-xs leading-4 mb-0 py-0 pr-2.5 pl-[5px]';
      break;
  }

  return (
    <span
      className={`inline-block w-auto text-left font-bold text-white ${badgeClass} ${sizeClass} ${
        isClickable ? 'cusor-pointer' : ''
      }`}
      title={title}
    >
      {label}
    </span>
  );
}
