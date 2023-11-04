import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';

export enum ModalTypes {
  productDetails = 'productDetails',
  trendModal = 'trendModal',
  offerModal = 'offerModal',
  otherModal = 'otherModal',
  productVariant = 'productVariant',
  galleryModal = 'galleryModal',
}

// Type for our state
export interface ModalState {
  modalType: ModalTypes;
  offerId?: string;
  isOpen: boolean;
  hasFooter: boolean;
  title?: string;
}

// Initial state
const initialState: ModalState = {
  modalType: ModalTypes.productDetails,
  isOpen: false,
  hasFooter: false,
};

type openModalType = {
  modalType: ModalTypes;
  offerId?: string;
  hasFooter: boolean;
  title: string;
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<openModalType>) {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.hasFooter = action.payload.hasFooter;
      state.title = action.payload.title;
      state.offerId = action.payload.offerId;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.modal,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalProperties = (state: AppState) => ({
  title: state[modalSlice.name].title,
  hasFooter: state[modalSlice.name].hasFooter,
  modalType: state[modalSlice.name].modalType,
  isOpen: state[modalSlice.name].isOpen,
  offerId: state[modalSlice.name].offerId,
});

export default modalSlice.reducer;
