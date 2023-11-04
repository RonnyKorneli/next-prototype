import ProductDetailsAttributes from '@components/ProductDetails/ProductDetailsAttributes';
import ProductDetailsDescription from '@components/ProductDetails/ProductDetailsDescription';
import ProductDetailsManufacturer from '@components/ProductDetails/ProductDetailsManufacturer';

export default function ProductDetailsModal() {
  return (
    <div className="modal-detail max-w-5xl lg:w-[64rem]">
      <div className="content-box">
        <ProductDetailsDescription showHeadline={false} />
        <ProductDetailsManufacturer />
        <ProductDetailsAttributes showHeadline={true} expandable={false} />
      </div>
    </div>
  );
}
