import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { offerSectionSlice } from '@components/OfferSection/offerSectionSlice';
import { wishlistSlice } from '@components/Wishlist/wishlistSlice';
import { modalSlice } from '@components/Modal/ModalSlice';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ProductSlice } from '@store/server/ProductSlice';
import { OfferDataSlice } from '@store/server/OfferDataSlice';
import { ShippingCostsSlice } from '@store/server/ShippingCostSlice';
import { PriceTrendSlice } from '@store/server/TrendDataSlice';
import thunk from 'redux-thunk';
import { State } from 'js-yaml';

const rootReducer = {
  // server reducer
  [ProductSlice.name]: ProductSlice.reducer,
  [OfferDataSlice.name]: OfferDataSlice.reducer,
  [ShippingCostsSlice.name]: ShippingCostsSlice.reducer,
  [PriceTrendSlice.name]: PriceTrendSlice.reducer,
  // client reducer
  [offerSectionSlice.name]: offerSectionSlice.reducer,
  [wishlistSlice.name]: wishlistSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
};

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger).concat(thunk),
  });
}
type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppThunkDispatch = ThunkDispatch<State, void, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
// Typed Selector for better usage, please use it, after use remove eslint bypass
// eslint-disable-next-line no-use-before-define
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
