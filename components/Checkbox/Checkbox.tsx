type CheckboxProps = {
  size?: 'small' | 'medium' | 'large';
  isCheckboxAvailable: boolean;
  checked: boolean;
  dataGtm?: string;
  dataEventGroup?: string;
  id: string;
  name: string;
  value: string;
  label: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  size = 'medium',
  value,
  name,
  isCheckboxAvailable,
  checked,
  id,
  handleChange,
  label,
  dataGtm,
  dataEventGroup,
}: CheckboxProps) {
  let disabledClassNames = '';

  if (!isCheckboxAvailable) {
    disabledClassNames = 'text-grey-light-20';
  }
  const sizesWrapper = {
    small: 'pt-0 mr-1',
    medium: 'p-1 mr-2',
    large: 'p-1 mr-2',
  };
  const sizesLabel = {
    small: 'text-xs leading-4',
    medium: 'text-sm leading-5',
    large: 'text-sm leading-5',
  };

  // this will create the checkmark with borders and rotation
  const checkedClasses =
    'border-blue border-[10px] before:absolute before:left-[-5px] before:top-[1px] before:animate-checkbox-check before:border-r-2 before:border-b-2';

  return (
    <div className="mb-0 flex flex-shrink-0 flex-col">
      <div className={`flex w-fit ${sizesWrapper[size]} ${disabledClassNames}`}>
        <label htmlFor={id} className={`flex ${sizesLabel[size]}`}>
          <div
            className={`relative mr-2 h-5 w-5 bg-white transition-all ${
              checked ? checkedClasses : 'border-2'
            }`}
          ></div>
          <input
            className="m-0 h-0 w-0 p-0 opacity-0"
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={checked}
            disabled={!isCheckboxAvailable}
            onChange={(e) => {
              if (handleChange) {
                isCheckboxAvailable && handleChange(e);
              }
            }}
            data-gtm={dataGtm}
            data-event-group={dataEventGroup}
            data-index={label}
          />
          {label}
        </label>
      </div>
    </div>
  );
}
