import WishlistStatusButton from '@components/Wishlist/StatusButton';
import TrendIcon from '@icons/trend.svg';
import { useSelector } from 'react-redux';
import { selectProductId, selectProductName } from '@store/server/ProductSlice';
import ContentBox from '@components/ContentBox/ContentBox';
import PriceTrendInnerBox from '@components/PriceTrend/PriceTrendInnerBox';

export default function PriceTrendBox() {
  const productName = useSelector(selectProductName);
  const productId = useSelector(selectProductId);
  return (
    <section
      className="mx-auto my-0 w-full max-w-screen-lg"
      id="trend-details-wrapper"
    >
      <ContentBox
        title="Preisentwicklung"
        subtitle={productName}
        icon={<TrendIcon className="w-[50px] fill-[#002948]" />}
        headerRightElement={
          <WishlistStatusButton productId={productId} withLabel={true} />
        }
      >
        <PriceTrendInnerBox />
      </ContentBox>
    </section>
  );
}
