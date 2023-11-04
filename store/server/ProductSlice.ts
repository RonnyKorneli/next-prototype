import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';
import {
  GetProductDetailsQuery,
  GetProductDetailsQueryVariables,
} from '@graphql/generated/client';
import graphQLClient from '@graphql/graphQLClient';
import { moveElementInArray } from '../../helpers/ArrangeArray';

// Type for our state
export interface ProductState {
  isLoading: boolean;
  productId?: string;
  productResponse?: GetProductDetailsQuery;
  error?: string;
}
// Initial state
const initialState: ProductState = {
  isLoading: false,
};

export const fetchProductThunk = createAsyncThunk<
  GetProductDetailsQuery,
  GetProductDetailsQueryVariables,
  { state: AppState }
>(
  'server/product/graphql/GetProductDetails',
  async (
    getProductDetailsQueryVariables,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _thunkAPI
  ) => {
    const { data: productDetailData } = await graphQLClient.getProductDetails(
      getProductDetailsQueryVariables
    );
    if (!productDetailData.product?.name) {
      throw new Error('Product has no name');
    }

    if (!productDetailData) {
      throw new Error('No product found');
    }
    return productDetailData;
  }
);

// Actual Slice
export const ProductSlice = createSlice({
  name: 'server/product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductThunk.fulfilled, (state: ProductState, action) => {
        state.productResponse = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductThunk.rejected, (state: ProductState) => {
        state.error = 'Upps there is an error';
        state.isLoading = false;
      })
      .addCase(fetchProductThunk.pending, (state: ProductState, action) => {
        state.isLoading = true;
        state.productId = action.meta.arg.productId;
      })
      .addCase(HYDRATE, (state: ProductState, action) => {
        return {
          ...state,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          ...action.payload[ProductSlice.name],
        };
      });
  },
});

export const {} = ProductSlice.actions;

export const selectProductId = (state: AppState) =>
  state[ProductSlice.name].productId;
export const selectSeoTitle = (state: AppState) => {
  return state[ProductSlice.name].productResponse?.product?.name;
};
export const selectRobotIndex = (state: AppState) => {
  const robotIndex =
    state[ProductSlice.name].productResponse?.product?.robotsIndex;
  if (robotIndex) {
    return 'index';
  }
  return 'noindex';
};
export const selectProductResponse = (state: AppState) => {
  const productResponse = state[ProductSlice.name].productResponse;
  if (!productResponse) {
    throw new Error('Error Response not loaded');
  }
  return productResponse;
};

export const selectProduct = createSelector(
  selectProductResponse,
  (productResponse: GetProductDetailsQuery | undefined) => {
    const product = productResponse?.product;
    if (!product) {
      throw new Error('Tried to select a product before it was loaded');
    }
    return product;
  }
);

export const selectProductName = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.name;
  }
);

export const selectProductVariants = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.productVariants;
  }
);

export const selectParentProduct = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    if (!product.parentProduct) return null;
    return product.parentProduct;
  }
);

export const selectProductVariantsSorted = (productId?: string) =>
  createSelector(selectProduct, (product: ReturnType<typeof selectProduct>) => {
    if (!product.productVariants && !productId) return undefined;
    const productVariants = product.productVariants;
    const selectedItemIndex = productVariants?.findIndex(
      (item) => item?.id === productId
    );

    return moveElementInArray(selectedItemIndex, 0, productVariants);
  });

export const selectPriceDeRank = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.preisdeRank;
  }
);

export const selectClassification = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.classification;
  }
);
export const selectParentCategory = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.parentCategory;
  }
);

export const selectManufacturer = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.manufacturer;
  }
);

export const selectManufacturerName = createSelector(
  selectManufacturer,
  (manufacturer: ReturnType<typeof selectManufacturer>) => {
    return manufacturer?.name;
  }
);

export const selectTopProductsByCategory = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.topProductsByCategory;
  }
);

export const selectTopProductsByManufacturer = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.topProductsByManufacturer;
  }
);

export const selectTestContext = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.testContext;
  }
);
export const selectTestContextGradeName = createSelector(
  selectTestContext,
  (testContext: ReturnType<typeof selectTestContext>) => {
    return testContext?.gradeName;
  }
);
export const selectTestContextGradeValue = createSelector(
  selectTestContext,
  (testContext: ReturnType<typeof selectTestContext>) => {
    return testContext?.gradeValue;
  }
);
export const selectTestContextAverageNumber = createSelector(
  selectTestContext,
  (testContext: ReturnType<typeof selectTestContext>) => {
    return testContext?.testAverageValue;
  }
);
export const selectTestContextProductTestWithText = createSelector(
  selectTestContext,
  (testContext: ReturnType<typeof selectTestContext>) => {
    return testContext?.productTestWithText;
  }
);
export const selectTestContextProductTestWithoutText = createSelector(
  selectTestContext,
  (testContext: ReturnType<typeof selectTestContext>) => {
    return testContext?.productTestWithoutText;
  }
);
export const selectFirstHDImage = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    if (!product.images || product.images.length == 0) {
      return undefined;
    }
    return product.images[0]?.hd;
  }
);

export const selectAllImages = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    if (!product.images) {
      return [];
    }
    return product.images;
  }
);

export const selectProductVideos = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    const videos = product.videos;
    if (!videos || videos.length == 0) {
      return [];
    }
    return videos;
  }
);

export const selectVariantCount = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.variantCount;
  }
);

export const selectProductSubline = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.shortDescription;
  }
);
export const selectProductDescription = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.description;
  }
);
export const selectTopProductsByType = createSelector(
  [
    selectTopProductsByCategory,
    selectTopProductsByManufacturer,
    (state, type: 'ByTopCategory' | 'ByManufacturer') => type,
  ],
  (topProductsByCategory, topProductsByManufacturer, type) => {
    if (type === 'ByManufacturer') {
      return topProductsByManufacturer;
    }
    return topProductsByCategory;
  }
);

export const selectSavingRate = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.savingRate;
  }
);

export const selectBestOffer = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.bestOffer;
  }
);
export const selectUserManualUrl = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.userManualUrl;
  }
);
export const selectProductCategoryRank = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.categoryRank;
  }
);
export const selectProductParentCategoryName = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.parentCategory?.name;
  }
);
export const selectProductMaxPrice = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.maxPrice;
  }
);
export const selectProductMinPrice = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.minPrice;
  }
);
export const selectProductAttributes = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.attributes;
  }
);
export const selectProductWarning = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.productWarning;
  }
);
export const selectProductDepositInfo = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.productDepositInfo;
  }
);
export const selectProductKeyFacts = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.productKeyfacts;
  }
);
export const selectProductShortDescription = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.shortDescription;
  }
);
export const selectProductRecommendation = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.productRecommendation;
  }
);
export const selectProductNextCategoryRecommendation = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.nextCategoryRecommendation;
  }
);
export const selectBreadcrumbItems = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.breadcrumb;
  }
);
export const selectAmazonRating = createSelector(
  selectProduct,
  (product: ReturnType<typeof selectProduct>) => {
    return product.amazonRating;
  }
);
export const selectLoading = (state: AppState) =>
  state[ProductSlice.name].isLoading;

export default ProductSlice.reducer;
