import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';
import {
  GetShippingCostsQuery,
  GetShippingCostsQueryVariables,
} from '@graphql/generated/client';
import graphQLClient from '@graphql/graphQLClient';

// Type for our state
export interface ShippingCostsState {
  isLoading: boolean;
  shippingCostsResponse?: GetShippingCostsQuery;
  error?: string;
}

// Initial state
const initialState: ShippingCostsState = {
  isLoading: false,
};

export const fetchShippingCostThunk = createAsyncThunk<
  GetShippingCostsQuery,
  GetShippingCostsQueryVariables,
  { state: AppState }
>(
  'server/shippingCosts/graphql/GetShippingCostsQuery',
  async (
    getOfferDataQueryVariables,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _thunkAPI
  ) => {
    const { data: shippingCostsResponse } =
      await graphQLClient.getShippingCosts(getOfferDataQueryVariables);

    if (!shippingCostsResponse) {
      throw new Error('error during request');
    }
    return shippingCostsResponse;
  }
);

// Actual Slice
export const ShippingCostsSlice = createSlice({
  name: 'server/shippingCosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchShippingCostThunk.fulfilled,
        (state: ShippingCostsState, action) => {
          state.shippingCostsResponse = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchShippingCostThunk.rejected, (state: ShippingCostsState) => {
        state.error = 'Upps there is an error';
        state.isLoading = false;
      })
      .addCase(fetchShippingCostThunk.pending, (state: ShippingCostsState) => {
        state.isLoading = true;
      })
      .addCase(HYDRATE, (state: ShippingCostsState, action) => {
        return {
          ...state,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          ...action.payload[ShippingCostsSlice.name],
        };
      });
  },
});

export const {} = ShippingCostsSlice.actions;

export const selectShippingCostsResponse = (state: AppState) => {
  const shippingCostsResponse =
    state[ShippingCostsSlice.name].shippingCostsResponse;
  if (!shippingCostsResponse) {
    throw new Error('Error Response not loaded');
  }
  return shippingCostsResponse;
};

export const selectOfferShippingCosts = (offerId: string) =>
  createSelector(selectShippingCostsResponse, (shippingCostsResponse) => {
    const costItem = shippingCostsResponse.offerDeliveryCosts?.filter(
      (costItem) => costItem?.offerId === offerId
    );
    if (!costItem) return undefined;
    return costItem;
  });
export const selectLoading = (state: AppState) =>
  state[ShippingCostsSlice.name].isLoading;

export default ShippingCostsSlice.reducer;
