import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';
import {
  GetOfferDataQuery,
  GetOfferDataQueryVariables,
} from '@graphql/generated/client';
import graphQLClient from '@graphql/graphQLClient';
import { getPaginationSteps } from '@helpers/PaginationHelper';

// Type for our state
export interface OfferDataState {
  isLoading: boolean;
  offerDataResponse?: GetOfferDataQuery;
  error?: string;
  selectedOfferFilter?: {
    isReduced: boolean;
    isFastDelivery: boolean;
    isOnlyUsed: boolean;
    isWithShippingCosts: boolean;
  };
}

// Initial state
const initialState: OfferDataState = {
  isLoading: false,
};

export const fetchOfferDataThunk = createAsyncThunk<
  GetOfferDataQuery,
  GetOfferDataQueryVariables,
  { state: AppState }
>(
  'server/product/graphql/GetOfferData',
  async (
    getOfferDataQueryVariables,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _thunkAPI
  ) => {
    const { data: offerDataResponse } = await graphQLClient.getOfferData(
      getOfferDataQueryVariables
    );

    if (!offerDataResponse) {
      throw new Error('Error during Request');
    }
    return offerDataResponse;
  }
);

// Actual Slice
export const OfferDataSlice = createSlice({
  name: 'server/offerData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOfferDataThunk.fulfilled,
        (state: OfferDataState, action) => {
          state.offerDataResponse = action.payload;
          state.isLoading = false;
          state.selectedOfferFilter = {
            isFastDelivery: !!action.meta.arg.fastDelivery,
            isOnlyUsed: !!action.meta.arg.onlyUsed,
            isWithShippingCosts: !!action.meta.arg.withShipping,
            isReduced: !!action.meta.arg.reduced,
          };
        }
      )
      .addCase(
        fetchOfferDataThunk.rejected,
        (state: OfferDataState, action) => {
          state.error = action.error.message;
          state.isLoading = false;
        }
      )
      .addCase(fetchOfferDataThunk.pending, (state: OfferDataState) => {
        state.isLoading = true;
      })
      .addCase(HYDRATE, (state: OfferDataState, action) => {
        return {
          ...state,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          ...action.payload[OfferDataSlice.name],
        };
      });
  },
});

export const {} = OfferDataSlice.actions;

export const selectOfferResponse = (state: AppState) => {
  const offerDataResponse = state[OfferDataSlice.name].offerDataResponse;
  if (!offerDataResponse) {
    throw new Error(state[OfferDataSlice.name].error);
  }
  return offerDataResponse;
};
export const selectOfferContext = createSelector(
  selectOfferResponse,
  (offerDataResponse: ReturnType<typeof selectOfferResponse>) => {
    const offerContext = offerDataResponse.product?.offerContext;
    if (!offerContext) {
      throw new Error('Error OfferContext not loaded');
    }
    return offerContext;
  }
);
export const selectOffers = createSelector(
  selectOfferContext,
  (offerContext: ReturnType<typeof selectOfferContext>) => {
    return offerContext.offers;
  }
);
export const selectOffer = (offerId: string) =>
  createSelector(selectOffers, (offers: ReturnType<typeof selectOffers>) => {
    if (!offers) return undefined;
    return offers.filter((offer) => offer?.id === offerId)[0];
  });

export const selectCurrentPageNumber = createSelector(
  selectOfferContext,
  (offerContext: ReturnType<typeof selectOfferContext>) => {
    const currentPageNumber = offerContext.currentPage;
    if (!currentPageNumber) {
      throw new Error('Failed to get the page number');
    }
    return currentPageNumber;
  }
);

export const selectMaxPage = createSelector(
  selectOfferContext,
  (offerContext: ReturnType<typeof selectOfferContext>) => {
    const currentPageNumber = offerContext.maxPage;
    if (!currentPageNumber) {
      throw new Error('Failed to get the max page number');
    }
    return currentPageNumber;
  }
);
export const selectPaginationButtonInformation = createSelector(
  selectMaxPage,
  selectCurrentPageNumber,
  (
    maxPage: ReturnType<typeof selectMaxPage>,
    currentPage: ReturnType<typeof selectCurrentPageNumber>
  ) => {
    return {
      hasBackToStartButton: currentPage > 2,
      hasNextButton: currentPage != maxPage,
      hasPrevButton: currentPage > 1,
      steps: getPaginationSteps(currentPage, maxPage),
    };
  }
);
export const selectOfferCount = createSelector(
  selectOfferContext,
  (offerContext: ReturnType<typeof selectOfferContext>) => {
    return offerContext.offerCount ? offerContext.offerCount : 0;
  }
);
export const selectFilterPossibilities = createSelector(
  selectOfferContext,
  (offerContext: ReturnType<typeof selectOfferContext>) => {
    return offerContext.offerFilterSet;
  }
);
export const selectSelectedOfferFilter = (state: AppState) => {
  return state[OfferDataSlice.name].selectedOfferFilter;
};
export const selectLoading = (state: AppState) =>
  state[OfferDataSlice.name].isLoading;

export default OfferDataSlice.reducer;
