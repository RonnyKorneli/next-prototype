import ArrowFirstPage from '@icons/first-page.svg';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import {
  selectCurrentPageNumber,
  selectPaginationButtonInformation,
  selectSelectedOfferFilter,
} from '@store/server/OfferDataSlice';
import { useRouter } from 'next/router';
import { selectProductId, selectProductName } from '@store/server/ProductSlice';

export default function OfferPagination() {
  const router = useRouter();

  const { hasBackToStartButton, hasNextButton, hasPrevButton, steps } =
    useSelector(selectPaginationButtonInformation);
  const currentPageNumber = useSelector(selectCurrentPageNumber);
  const productName = useSelector(selectProductName);
  const productId = useSelector(selectProductId);
  const filterState = useSelector(selectSelectedOfferFilter);
  const handleSetPage = (page: number) => async () => {
    /* client can't fetch anything, so we have to do a full page load */
    await router.push(
      {
        pathname: router.pathname,
        query: {
          ...filterState,
          ...{
            page,
          },
        },
      },
      {
        pathname: `/produkte/${productName}/${productId}`,
        query: {
          ...filterState,
          ...{
            page,
          },
        },
      }
    );
  };

  return (
    <section id="pagination" className="pagination">
      <ul className="page-navigation">
        {hasBackToStartButton && (
          <li className="page-item first-page">
            <button className="first" onClick={handleSetPage(1)}>
              <ArrowFirstPage className="arrow-left" width="20" />
            </button>
          </li>
        )}
        {hasPrevButton && (
          <li className="page-item">
            <button
              className="prev"
              onClick={handleSetPage(currentPageNumber - 1)}
              data-gtm="pagination-back"
            >
              Zurück
            </button>
          </li>
        )}
        <li className="page-item mobile-paginations-info">
          <span>Seite {currentPageNumber}</span>
        </li>
        <li className="page-item pages">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <button
                className={step.class}
                onClick={handleSetPage(step.page)}
                data-gtm="pagination-page"
              >
                {step.page}
              </button>
              {step.pointsAfter && <button className="more-pages">...</button>}
            </Fragment>
          ))}
        </li>
        {hasNextButton && (
          <li className="page-item">
            <button
              className="next"
              onClick={handleSetPage(currentPageNumber + 1)}
              data-gtm="pagination-next"
            >
              Weiter
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
