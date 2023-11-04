import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface OfferSectionState {
  displayList: boolean;
}

// Initial state
const initialState: OfferSectionState = {
  displayList: true,
};

// Actual Slice
export const offerSectionSlice = createSlice({
  name: 'client/offerSection',
  initialState,
  reducers: {
    // Action to set the display state of offers (grid or list)
    setDisplayList(state, action) {
      state.displayList = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: OfferSectionState, action) => {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        ...action.payload.offerSection,
      };
    });
  },
});

export const { setDisplayList } = offerSectionSlice.actions;

export const selectDisplayList = (state: AppState) =>
  state[offerSectionSlice.name].displayList;

export default offerSectionSlice.reducer;
