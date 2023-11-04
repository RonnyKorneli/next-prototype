import { useDispatch, useSelector } from 'react-redux';

import CloseIcon from '@icons/close.svg';
import {
  closeModal,
  ModalTypes,
  selectModalProperties,
} from '@components/Modal/ModalSlice';
import ProductDetailsModal from '@components/Modal/ProductDetailsModal';
import OfferModal from '@components/Modal/OfferModal';
import TrendModal from '@components/Modal/TrendModal';
import GalleryModal from '@components/Modal/GalleryModal';
import ProductVariantModal from '@components/Modal/ProductVariantModal';
import React from 'react';

export default function Modal() {
  const dispatch = useDispatch();
  // implement selectors
  const { isOpen, modalType, hasFooter, title } = useSelector(
    selectModalProperties
  );
  if (!isOpen) {
    return <></>;
  }
  let modalContent;

  switch (modalType) {
    case ModalTypes.productDetails:
      modalContent = <ProductDetailsModal />;
      break;
    case ModalTypes.offerModal:
      modalContent = <OfferModal />;
      break;
    case ModalTypes.trendModal:
      modalContent = <TrendModal />;
      break;
    /* case ModalTypes.otherModal:
      modalContent = <OtherModal />;
      break; */
    case ModalTypes.productVariant:
      modalContent = <ProductVariantModal />;
      break;
    case ModalTypes.galleryModal:
      modalContent = <GalleryModal />;
      break;
    default:
      modalContent = <></>;
  }

  function clickCloseIcon() {
    dispatch(closeModal());
  }

  return (
    <div
      className="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full justify-center p-0 text-center sm:items-center sm:p-0 md:p-4">
          <div className="relative w-full transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-auto md:rounded-lg ">
            <div
              onClick={clickCloseIcon}
              className="absolute right-[20px] top-[20px] cursor-pointer"
            >
              <CloseIcon width="24" height="24" className="fill-gray-500" />
            </div>
            <div className="border-0 border-b border-solid border-grey-light-40 bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="text-lg font-normal sm:text-left md:text-center md:text-2xl">
                  {title}
                </div>
              </div>
            </div>
            <div className="max-h-[80vh] overflow-y-auto bg-white">
              {modalContent}
            </div>
            {hasFooter && (
              <div className="flex justify-center border px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  className="btn-outline -medium -blue w-[330px]"
                  aria-label="Schließen"
                  onClick={clickCloseIcon}
                >
                  Schließen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
