import { useSelector } from 'react-redux';
import {
  isProductInWishlist,
  addWishlistItem,
  removeWishlistItem,
} from '@components/Wishlist/wishlistSlice';
import HeartIcon from '@icons/heart.svg';
import { useAppDispatch } from '@store/store';

type WishlistStatusProps = {
  productId?: string;
  withLabel?: boolean;
};

export default function WishlistStatusButton({
  productId,
  withLabel = false,
}: WishlistStatusProps) {
  if (!productId) {
    throw new Error('No Product Id found');
  }
  const active = useSelector(isProductInWishlist(productId));
  const dispatch = useAppDispatch();

  const title = active
    ? 'Produkt von Merkzettel entfernen'
    : 'Produkt auf Merkzettel speichern';
  const animated = active;

  const handleClick = (productId: string) => {
    let reqObject;
    if (active) {
      dispatch(removeWishlistItem(productId));
      reqObject = {
        action: 'remove',
        productId: productId,
      };
    } else {
      dispatch(addWishlistItem(productId));
      reqObject = {
        action: 'add',
        productId: productId,
      };
    }

    fetch(process.env.NEXT_PUBLIC_WISHLIST_API_ENDPOINT || '', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqObject),
    });
  };

  if (!productId) return <></>;
  return (
    <button
      className="absolute right-14 -top-1.5 z-[2] h-auto w-auto cursor-pointer rounded-full border-0 bg-white/90 px-1.5 pt-1.5
      pt-2 pb-px text-center outline-none md:right-[53px] md:-top-3 lg:right-0 lg:top-0"
      title={title}
      data-gtm="wishlist-button"
      onClick={() => {
        handleClick(productId);
      }}
    >
      <HeartIcon
        className={`pointer-events-none inline-block h-[26px] w-[26px] stroke-2 transition-transform duration-200 ease-out  will-change-transform
          hover:scale-110 md:w-[22px] md:w-[22px]
          ${
            active
              ? 'fill-green stroke-green'
              : ' fill-transparent stroke-grey-light-10'
          }
           ${animated ? 'animate-heartbeat' : ''} 
          `}
      />
      {withLabel && (
        <span className="hidden px-0 pt-1.5 text-xs text-grey lg:block">
          {active ? 'Produkt gemerkt' : 'Produkt merken'}
        </span>
      )}
    </button>
  );
}
