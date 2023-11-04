import BrandsIcon from '@icons/brands.svg';
import PopularyIcon from '@icons/populary.svg';
import Link from 'next/link';
import LinkIcon from '@icons/link.svg';
import ManualIcon from '@icons/manual.svg';
import { useSelector } from 'react-redux';
import {
  selectManufacturer,
  selectUserManualUrl,
} from '@store/server/ProductSlice';

export function ProductDetailsManufacturer() {
  const manufacturer = useSelector(selectManufacturer);
  const userManualUrl = useSelector(selectUserManualUrl);

  const manufacturerLink = () => {
    // @todo Was heißt das hier?
    if (manufacturer?.homepage) {
      return (
        <Link
          className="row-start-2 my-0 mx-auto flex flex-col items-center p-[10px] md:col-start-3 md:row-start-1 lg:py-[5px]"
          href={`${manufacturer.homepage}#info`}
          target="_blank"
          rel="noopener"
        >
          <LinkIcon className="fill-current text-blue" width="48" height="48" />
          <div className="text-center underline">Direkt zum Hersteller</div>
        </Link>
      );
    }
    if (userManualUrl) {
      // @todo refactor - Link nur einmal setzen (seo Gründe)
      return (
        <>
          <Link
            className="row-start-2 my-0 mx-auto flex flex-col items-center p-[10px] md:col-start-3 md:row-start-1 lg:py-[5px]"
            href={`${userManualUrl}#info`}
            target="_blank"
            rel="noopener"
          >
            <ManualIcon
              className="fill-current text-blue"
              width="48"
              height="48"
            />
            <div className="text-center underline">
              Zur Bedienungsanleitung des Herstellers
            </div>
          </Link>
          <Link
            className="row-start-2 my-0 mx-auto flex flex-col items-center p-[10px] md:col-start-3 md:row-start-1 lg:py-[5px]"
            href={`${userManualUrl}#info`}
            target="_blank"
            rel="noopener"
          >
            <LinkIcon
              className="fill-current text-blue"
              width="48"
              height="48"
            />
            <div className="text-center underline">Direkt zum Hersteller</div>
          </Link>
        </>
      );
    }
    if (userManualUrl && manufacturer?.homepage) {
      return (
        <Link
          className="row-start-2 my-0 mx-auto flex flex-col items-center p-[10px] md:col-start-3 md:row-start-1 lg:py-[5px]"
          href={`${userManualUrl}#info`}
          target="_blank"
          rel="noopener"
        >
          <ManualIcon
            className="fill-current text-blue"
            width="48"
            height="48"
          />
          <div className="text-center underline">
            Zur Bedienungsanleitung des Herstellers
          </div>
        </Link>
      );
    }
  };

  return (
    <>
      {manufacturer && (
        <>
          <h3 className="mx-0 mt-0 mb-4 w-full bg-blue-light-50 py-4 px-[7%] text-sm font-bold leading-normal text-blue">
            Markeninformationen
          </h3>
          <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
            <div className="headline-26-default-700-default mx-[25px] mb-[15px] flex w-full flex-row items-center justify-center border-none lg:w-1/3 lg:border-l-0 lg:border-t-0 lg:border-b-0 lg:border-r lg:border-solid lg:border-grey-light-30">
              {manufacturer.name}
            </div>
            <div className="brand-icons">
              <Link
                className="my-0 mx-auto flex flex-col items-center p-[10px] lg:py-[5px]"
                href={manufacturer.url}
                target="_blank"
                rel="noopener"
              >
                <PopularyIcon
                  className="fill-current text-blue"
                  width="48"
                  height="48"
                />
                <div className="text-center underline">
                  {manufacturer.name} Produkte
                </div>
              </Link>
              <Link
                className="my-0 mx-auto flex flex-col items-center p-[10px] lg:py-[5px]"
                href={manufacturer.name}
                target="_blank"
                rel="noopener"
              >
                <BrandsIcon
                  className="fill-current text-blue"
                  width="48"
                  height="48"
                />
                <div className="text-center underline">Markendetails</div>
              </Link>
              {manufacturerLink()}
            </div>
          </div>
        </>
      )}
    </>
  );
}
