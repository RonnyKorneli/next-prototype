import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';

export interface WishlistState {
  wishlistItems: Array<string>;
}

// Initial state
const initialState: WishlistState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlistItems(state, action) {
      state.wishlistItems = action.payload;
    },
    addWishlistItem(state, action) {
      state.wishlistItems.push(action.payload);
    },
    removeWishlistItem(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item !== action.payload
      );
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.wishlistItems,
      };
    },
  },
});

export const { addWishlistItem, removeWishlistItem, setWishlistItems } =
  wishlistSlice.actions;

export const countWishlistItems = (state: AppState) =>
  state.wishlist.wishlistItems.length;

export const selectWishlistItems = (state: AppState) =>
  state.wishlist.wishlistItems;

export const isProductInWishlist = (productId: string) => (state: AppState) =>
  state.wishlist.wishlistItems.includes(productId);

export default wishlistSlice.reducer;
