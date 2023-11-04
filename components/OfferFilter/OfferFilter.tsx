import Checkbox from '@components/Checkbox/Checkbox';
import ListIcon from '@icons/list.svg';
import GridIcon from '@icons/tiles.svg';
import {
  selectDisplayList,
  setDisplayList,
} from '@components/OfferSection/offerSectionSlice';
import { useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectOfferCount } from '@store/server/OfferDataSlice';
import { FilterButton } from './FilterButton/FilterButton';
import { selectProductId, selectProductName } from '@store/server/ProductSlice';

export default function OfferFilter() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isList = useSelector(selectDisplayList);
  const offerCount = useSelector(selectOfferCount);
  const productName = useSelector(selectProductName);
  const productId = useSelector(selectProductId);
  const filterState = {
    fastDelivery: router.query.fastDelivery === 'true',
    withShipping: router.query.withShipping === 'true',
    onlyUsed: router.query.onlyUsed === 'true',
  };
  console.log(router.query.fastDelivery);
  const handleChangeOfCheckbox =
    (name: 'fastDelivery' | 'withShipping' | 'onlyUsed', value: boolean) =>
    async () => {
      filterState[name] = value;
      // hide the filter in url if they are false
      const copyFilterState = { ...filterState };
      let key: keyof typeof copyFilterState;
      for (key in copyFilterState) {
        const value = copyFilterState[key];
        if (!value) {
          delete copyFilterState[key];
        }
      }
      await router.push(
        {
          pathname: router.pathname,
          query: { page: 1, ...copyFilterState },
        },
        {
          pathname: `/produkte/${productName}/${productId}`,
          query: { page: 1, ...copyFilterState },
        }
      );
    };

  return (
    <section className="offer-filter">
      <h2 className="content-title -mobile">
        Preisvergleich für &nsp;{offerCount} Angebote*
        <a className="ranking-link" href="/ranking" target="_blank">
          Wie werden die Ergebnisse sortiert?
        </a>
      </h2>
      <h2 className="content-title -desktop">
        Preisvergleich {productName}&nbsp;
        <span className="count">({offerCount} Angebote*)</span>
        <a className="ranking-link" href="/ranking" target="_blank">
          Wie werden die Ergebnisse sortiert?
        </a>
      </h2>
      <div className="container-narrow flex w-full pt-0 filter md:pb-2">
        <FilterButton />

        <Checkbox
          label="schnell lieferbar"
          name="fastDelivery"
          id="fastDelivery"
          value="fastDelivery"
          isCheckboxAvailable={true}
          checked={filterState.fastDelivery}
          handleChange={handleChangeOfCheckbox(
            'fastDelivery',
            !filterState.fastDelivery
          )}
        />

        <Checkbox
          label="Preis inkl. Versand"
          name="withShipping"
          id="withShipping"
          value="withShipping"
          isCheckboxAvailable={true}
          checked={filterState.withShipping}
          handleChange={handleChangeOfCheckbox(
            'withShipping',
            !filterState.withShipping
          )}
        />

        <Checkbox
          label="nur gebraucht"
          name="onlyUsed"
          id="onlyUsed"
          value="onlyUsed"
          isCheckboxAvailable={true}
          checked={filterState.onlyUsed}
          handleChange={handleChangeOfCheckbox(
            'onlyUsed',
            !filterState.onlyUsed
          )}
        />

        <div className="display grow flex-auto text-right">
          {!isList ? (
            <ListIcon
              className="display-icon inline"
              width="18"
              height="18"
              onClick={() => {
                dispatch(setDisplayList(true));
              }}
            />
          ) : (
            <GridIcon
              className="display-icon inline"
              width="18"
              height="18"
              onClick={() => {
                dispatch(setDisplayList(false));
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
