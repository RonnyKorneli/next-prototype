import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from '@icons/close.svg';
import { isTouchDevice } from '@helpers/ScreenSizes';

type TooltipProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  text: string;
  position: string;
};

export default function Tooltip(props: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipId = 'tip_' + Math.floor(Math.random() * 999999);
  const tooltipRel = useRef<HTMLInputElement>(null);

  // @todo refactor to use general hook for click outside of target
  useEffect(() => {
    const handleClickOutside = () => (event: React.MouseEvent<HTMLElement>) => {
      const target: Element = event.target as Element;
      if (tooltipRel.current && !tooltipRel.current.contains(target)) {
        event.stopPropagation();
        event.preventDefault();
        setShowTooltip(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function handleMouseClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    e.preventDefault();
    setShowTooltip(!showTooltip);
  }

  if (isTouchDevice()) {
    return (
      <div className="tooltip-container" onClick={(e) => handleMouseClick(e)}>
        {props.children}
        {showTooltip ? (
          <span
            className="tip -active"
            id={tooltipId}
            data-position="bottom"
            role="tooltip"
            ref={tooltipRel}
          >
            <span
              className="close"
              onClick={() => {
                setShowTooltip(false);
              }}
            >
              <CloseIcon width="16" height="16" />
            </span>
            {props.text}
          </span>
        ) : (
          ''
        )}
      </div>
    );
  } else {
    return (
      <div
        className="tooltip-container top-px"
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
      >
        {props.children}
        {showTooltip ? (
          <span
            className="tip -active"
            id={tooltipId}
            data-position={props.position}
          >
            {props.text}
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}
