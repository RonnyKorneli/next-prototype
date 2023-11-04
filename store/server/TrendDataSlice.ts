import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';
import {
  GetPriceTrendQuery,
  GetPriceTrendQueryVariables,
} from '@graphql/generated/client';
import graphQLClient from '@graphql/graphQLClient';

interface TrendButton {
  key: string;
  value: string;
}

export interface TrendDataSlice {
  isLoading: boolean;
  error?: string;
  range: string;
  trendDataResponse?: GetPriceTrendQuery;
  rangeButtons: TrendButton[];
}

// Initial state
const initialState: TrendDataSlice = {
  isLoading: false,
  range: '6',
  rangeButtons: [
    {
      key: '3',
      value: '3 Monate',
    },
    {
      key: '6',
      value: '6 Monate',
    },
    {
      key: 'all',
      value: '1 Jahr',
    },
  ],
};

export const fetchPriceTrendThunk = createAsyncThunk<
  GetPriceTrendQuery,
  GetPriceTrendQueryVariables,
  { state: AppState }
>(
  'server/pricetrend/graphql/GetPriceTrendQuery',
  async (
    GetPriceTrendQueryVariables,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _thunkAPI
  ) => {
    const { data: trendDataResponse } = await graphQLClient.GetPriceTrend(
      GetPriceTrendQueryVariables
    );

    if (!trendDataResponse) {
      throw new Error('error during request');
    }
    return trendDataResponse;
  }
);

// Actual Slice
export const PriceTrendSlice = createSlice({
  name: 'server/pricetrend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPriceTrendThunk.fulfilled,
        (state: TrendDataSlice, action) => {
          state.trendDataResponse = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        fetchPriceTrendThunk.rejected,
        (state: TrendDataSlice, action) => {
          state.error = action.error.message;
          state.isLoading = false;
        }
      )
      .addCase(fetchPriceTrendThunk.pending, (state: TrendDataSlice) => {
        state.isLoading = true;
      })
      .addCase(HYDRATE, (state: TrendDataSlice, action) => {
        return {
          ...state,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          ...action.payload[PriceTrendSlice.name],
        };
      });
  },
});

export const {} = PriceTrendSlice.actions;
export const selectPriceTrend = (state: AppState) => {
  const trendDataResponse = state[PriceTrendSlice.name].trendDataResponse;
  if (!trendDataResponse) {
    throw new Error(state[PriceTrendSlice.name].error);
  }
  return trendDataResponse;
};
export const selectPriceTrendHistory = createSelector(
  selectPriceTrend,
  (priceTrend) => {
    return priceTrend.productPriceHistory;
  }
);
export const selectPriceTrendBestPriceProductIndex = createSelector(
  selectPriceTrend,
  (priceTrend) => {
    return priceTrend.bestHistoricalProductPriceIndex;
  }
);
export const selectPriceTrendRangeButtonConfig = (state: AppState) =>
  state[PriceTrendSlice.name].rangeButtons;

export const selectPriceTrendRange = (state: AppState) =>
  state[PriceTrendSlice.name].range;

export const selectLoading = (state: AppState) =>
  state[PriceTrendSlice.name].isLoading;

export default PriceTrendSlice.reducer;
