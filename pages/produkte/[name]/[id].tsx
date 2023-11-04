import Head from 'next/head';
import AdsenseForContent from '@components/AdsenseForContent';
import OfferSection from '@components/OfferSection';
import PriceTrendBox from '@components/PriceTrend/PriceTrendBox';
import ProductDetails from '@components/ProductDetails';
import ProductStage from '@components/ProductStage';
import ProductTestBox from '@components/ProductTestBox';
import TopProductsCarousel from '@components/TopProductsCarousel';
import { AppDispatch, wrapper } from '@store/store';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Modal from '@components/Modal';
import {
  fetchProductThunk,
  selectManufacturerName,
  selectParentCategory,
  selectRobotIndex,
  selectSeoTitle,
  selectTestContext,
  selectTopProductsByCategory,
} from '@store/server/ProductSlice';
import { fetchOfferDataThunk } from '@store/server/OfferDataSlice';
import { fetchPriceTrendThunk } from '@store/server/TrendDataSlice';
import { useSelector } from 'react-redux';
import { ModalTypes, openModal } from '@components/Modal/ModalSlice';
import { fetchShippingCostThunk } from '@store/server/ShippingCostSlice';

//Server Side Rendering Part
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const dispatch: AppDispatch = store.dispatch;
      const {
        id,
        page,
        fastDelivery,
        withShipping,
        onlyUsed,
        reduced,
        modal,
        offerId,
      } = query;

      if (!id) {
        throw new Error('show 404?');
      }
      if (typeof page === 'object') {
        throw new Error('show 404?');
      }
      let modalOpened;
      if (
        modal &&
        typeof modal === 'string' &&
        Object.values(ModalTypes).includes(modal as ModalTypes)
      ) {
        modalOpened = ModalTypes[modal as ModalTypes];
      }
      if (modalOpened === ModalTypes.offerModal) {
        if (typeof offerId === 'string') {
          // load shipping costs
          await dispatch(fetchShippingCostThunk({ id: offerId }));
          const modalConfig = {
            modalType: ModalTypes.offerModal,
            hasFooter: false,
            title: 'Angebotsdetails',
            offerId: offerId,
          };
          dispatch(openModal(modalConfig));
        }
      }

      const productId = id.toString().replace('.html', '');
      const pageNumber = page ? parseInt(page) : 1;
      // Product Data
      const variables = {
        id: productId,
        productId: productId,
      };
      await dispatch(fetchProductThunk(variables));
      // implement selector from store

      // Offer Section Data
      const filter = {
        onlyUsed: onlyUsed === 'true',
        fastDelivery: fastDelivery === 'true',
        withShipping: withShipping === 'true',
        reduced: reduced === 'true',
      };

      await dispatch(
        fetchOfferDataThunk({
          id: productId,
          productId: productId,
          page: pageNumber,
          ...filter,
        })
      );

      await dispatch(
        fetchPriceTrendThunk({
          id: productId,
          month: '6',
        })
      );

      // ---- fetch Merkzettel Produkt-Ids nur wenn kein bot (bot detection) --> TODO wenn API von Conrad ready ist
      /*const wishlistResponse = await fetch(
        process.env.NEXT_PUBLIC_WISHLIST_API_ENDPOINT as string,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'getAll',
          }),
        }
      );

      const wishlistItems = await wishlistResponse.json();
      store.dispatch(setWishlistItems(wishlistItems));
      */
      return {
        props: {},
      };
    }
);

export default function Product() {
  // @todo combine selectors later
  const seoTitle = useSelector(selectSeoTitle);
  const robotsIndex = useSelector(selectRobotIndex);
  const parentCategory = useSelector(selectParentCategory);
  const manufacturerName = useSelector(selectManufacturerName);
  const topProductsByCategory = useSelector(selectTopProductsByCategory);

  const testContext = useSelector(selectTestContext);

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} />
        <meta name="og:title" content={seoTitle} />
        <meta name="robots" content={robotsIndex} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Modal />
      <main role="main" id="main" className="mt-6 !h-auto">
        <ProductStage />
        <OfferSection />
        <PriceTrendBox />
        {parentCategory && topProductsByCategory && (
          <TopProductsCarousel
            title={'Top 10 ' + parentCategory.name}
            tooltipp={
              'Diese 10 Produkte aus der Kategorie ' +
              parentCategory.name +
              ' wurden von Preis.de Nutzer:innen in den letzten 30 Tagen am häufigsten aufgerufen.'
            }
            type="ByTopCategory"
          />
        )}
        <TopProductsCarousel
          title={'Mehr ' + manufacturerName + ' Produkte'}
          tooltipp={
            'Diese ' +
            manufacturerName +
            ' Produkte wurden von Preis.de Nutzer:innen in den letzten 30 Tagen am häufigsten aufgerufen.'
          }
          type="ByManufacturer"
        />
        <ProductDetails />
        <AdsenseForContent />
        {testContext && <ProductTestBox />}
      </main>
      <Footer />
    </>
  );
}
