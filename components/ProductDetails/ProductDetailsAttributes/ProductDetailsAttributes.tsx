import { useState, useRef } from 'react';
import TooltipIcon from '@icons/tooltip-outline.svg';
import Tooltip from '@components/Tooltip';
import { useSelector } from 'react-redux';
import { selectProductAttributes } from '@store/server/ProductSlice';

export function ProductDetailsAttributes({
  showHeadline = true,
  expandable = true,
}: {
  showHeadline?: boolean;
  expandable?: boolean;
}) {
  const productAttributes = useSelector(selectProductAttributes);

  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleExpanded = () => {
    setExpanded(!expanded);
    if (expanded) {
      if (ref.current) {
        ref.current.scrollIntoView();
      }
    }
  };

  // @todo move to memorable selector function
  const attributesThreshold = () => {
    if (productAttributes != null) {
      if (productAttributes.length > 10 && expandable) {
        return 5;
      }
      return productAttributes.length;
    }
    return 0;
  };
  const attributesCount = attributesThreshold();

  return (
    <>
      {productAttributes && (
        <>
          {showHeadline && (
            <h3
              className="m-0 w-full bg-blue-light-50 py-4 px-[7%] text-sm font-bold leading-normal text-blue"
              ref={ref}
            >
              Produkteigenschaften
            </h3>
          )}
          {productAttributes.map((attribute, index) => {
            if (!attribute) return <></>;
            if (index < attributesCount) {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 border-t border-l-0 border-b-0 border-r-0
                        border-solid border-grey-light-30 text-sm md:grid-cols-3"
                >
                  <div className="bg-gray-100 py-[5px] px-[7%] md:pl-[15%] md:pr-[10px] lg:pl-[20%]">
                    {attribute.name}
                    {attribute.description && (
                      <Tooltip text={attribute.description} position="top">
                        <TooltipIcon className="icon" />
                      </Tooltip>
                    )}
                  </div>
                  <span className="py-[5px] px-[7%] md:col-span-2 md:col-start-2 md:pl-[10px] md:pr-[7.5%] lg:pr-[10%]">
                    {attribute.stringValues?.join(', ')}
                    {attribute.unit}
                  </span>
                </div>
              );
            }
          })}
          {expanded && productAttributes && (
            <div id="additionalPropsContainer">
              {productAttributes.map((attribute, index) => {
                if (!attribute) return <></>;
                if (index >= attributesCount) {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 border-t border-l-0 border-b-0 border-r-0
                        border-solid border-grey-light-30 text-sm md:grid-cols-3"
                    >
                      <div className="bg-gray-100 py-[5px] px-[7%] md:pl-[15%] md:pr-[10px] lg:pl-[20%]">
                        {attribute.name}
                        {attribute.description && (
                          <Tooltip text={attribute.description} position="top">
                            <TooltipIcon className="icon" />
                          </Tooltip>
                        )}
                      </div>
                      <span className="py-[5px] px-[7%] md:col-span-2 md:col-start-2 md:pl-[10px] md:pr-[7.5%] lg:pr-[10%]">
                        {attribute.stringValues?.join(', ')} &nbsp;
                        {attribute.unit}
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          )}
          {productAttributes.length > attributesCount && expandable && (
            <div className="details-box">
              <button
                className="btn-basic -medium -middleblue"
                onClick={handleExpanded}
              >
                {expanded ? 'Weniger details' : 'Mehr details'}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
