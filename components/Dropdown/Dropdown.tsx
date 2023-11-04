import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ArrowIcon from '@icons/globals/arrow.svg';

type DropdownProps = {
  onClickOutside: () => void;
  resultSet: 'first' | 'second';
  defaultValue: any; //@fixme
  options: any; //@fixme
  description: string;
  onChange: (tag: any) => void;
};

export default function Dropdown({
  onClickOutside,
  resultSet,
  defaultValue,
  options,
  description = 'Sortieren nach:',
  onChange,
}: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const rootrel = useRef<any>();
  const itemRels = useRef<any>({});
  let selected = defaultValue ? defaultValue : options[0];

  function close() {
    setExpanded(false);
  }

  function select(tag: any) {
    close();
    if (selected.value != tag.value) {
      selected = tag.label;
      onChange(tag);
    }
  }

  function handleKeyboardInput(event: React.KeyboardEvent<HTMLElement>) {
    const current: any = document.activeElement;
    const isSibling = Object.values(itemRels.current).includes(current);
    switch (event.key) {
      case 'Enter':
        if (isSibling) {
          current.click();
          rootrel.current.focus();
        } else {
          setExpanded(!expanded);
        }
        break;
      case 'Escape':
        close();
        rootrel.current.focus();
        break;
      case 'ArrowDown':
        if (isSibling) {
          if (current.nextElementSibling != null) {
            inactivateListItems(Object.values(itemRels.current));
            current.nextElementSibling?.focus();
            current.nextElementSibling?.setAttribute('aria-selected', 'true');
          }
        } else {
          itemRels.current[0].focus();
        }
        break;
      case 'ArrowUp':
        if (isSibling) {
          if (current.previousElementSibling != null) {
            inactivateListItems(Object.values(itemRels.current));
            current.previousElementSibling?.focus();
            current.previousElementSibling?.setAttribute(
              'aria-selected',
              'true'
            );
          }
        }
        break;
      case 'Tab':
        close();
        return;
      default:
        return;
    }
    event.preventDefault();
  }

  function inactivateListItems(listItems: any[]) {
    listItems.forEach(
      (element: { removeAttribute: (arg0: string) => void }) => {
        element.removeAttribute('aria-selected');
      }
    );
  }

  // @todo refactor to use a general hook for click outside of target
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootrel.current && !rootrel.current.contains(event.target)) {
        close();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div
      className="dropdown relative h-[40px] bg-white"
      aria-expanded={expanded}
      aria-controls="dropdownMenu"
      aria-haspopup="listbox"
      data-cy={resultSet + 'SetDropdown'}
      tabIndex={0}
      onKeyDown={handleKeyboardInput}
      ref={rootrel}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <div
        className="border-grey-40 flex h-full items-center justify-between border border-solid"
        data-cy="DropdownHeaderText"
      >
        <span className="relative select-none px-[5px] py-[9px] text-xs text-grey ">
          {description}&nbsp;
          <span className="block font-bold leading-4 md:inline">
            {selected.label}
          </span>
        </span>
        <ArrowIcon
          className={
            'arrow icon ml-1.5 mr-2 fill-current text-grey ' +
            (expanded ? '-up' : '-down')
          }
          width="12"
          height="12"
        />
      </div>
      <div
        className="listbox border-grey-40 absolute left-0 z-20 mt-[-1px] w-full border border-solid bg-white"
        style={{ display: expanded ? 'block' : 'none' }}
        role="listbox"
        data-cy="listbox"
      >
        {options.map(
          (
            tag: {
              value: React.Key | null | undefined;
              label:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            index: number
          ) => (
            <span
              className="border-blue-primary hover:bg-blue-30 block border-0 border-solid p-2.5 text-xs hover:border-l-2 hover:pl-2"
              key={tag.value}
              aria-selected={index == 0}
              tabIndex={-1}
              data-gtm="sem-sorting-usage"
              data-event-group={tag.label}
              data-index={
                resultSet + (resultSet === 'first' ? 'st' : 'nd') + ' Resultset'
              }
              ref={(element) => (itemRels.current[index] = element)}
              onClick={() => {
                select(tag);
              }}
            >
              {tag.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}
