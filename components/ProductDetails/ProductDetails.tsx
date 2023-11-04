import ProductDetailsHeader from './ProductDetailsHeader';
import ProductDetailsDescription from './ProductDetailsDescription';
import ProductDetailsManufacturer from './ProductDetailsManufacturer';
import ProductDetailsAttributes from './ProductDetailsAttributes';
import ContentBox from '@components/ContentBox/ContentBox';
import AttributesIcon from '@icons/attributes.svg';
import { selectProductName } from '@store/server/ProductSlice';
import { useSelector } from 'react-redux';

export default function ProductDetails() {
  const productName = useSelector(selectProductName);
  return (
    <section
      className="mx-auto my-0 w-full max-w-screen-lg"
      id="product_details"
    >
      <ContentBox
        title="Produktdetails"
        subtitle={productName}
        icon={<AttributesIcon className="hidden w-[50px] fill-blue md:block" />}
      >
        <ProductDetailsHeader showRanking={true} />
        <ProductDetailsDescription showHeadline={true} />
        <ProductDetailsManufacturer />
        <ProductDetailsAttributes showHeadline={true} expandable={true} />
      </ContentBox>
    </section>
  );
}
