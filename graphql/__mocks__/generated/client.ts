import OfferData from '../offerData.json';
import ShippingCostData from '../mockOffershippingCost.json';
import ProductDetailsData from '../mockProductdetails.json';
import PriceTrendData from '../pricetrendmock.json';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
};

export type AdsensePlace = {
  __typename?: 'AdsensePlace';
  adLanguage?: Maybe<Scalars['String']>;
  adPage?: Maybe<Scalars['Boolean']>;
  adTest?: Maybe<Scalars['Boolean']>;
  channelId: Scalars['String'];
  customStyle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  modified?: Maybe<Scalars['String']>;
  noTitleUnderline?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  pubId?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type AdsensePlaceBlock = {
  __typename?: 'AdsensePlaceBlock';
  adsensePlaceId: Scalars['String'];
  container?: Maybe<Scalars['String']>;
  customStyle?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  modified?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type AdsensePlaceInformation = {
  __typename?: 'AdsensePlaceInformation';
  adsensePlace?: Maybe<AdsensePlace>;
  adsensePlaceBlockList?: Maybe<Array<Maybe<AdsensePlaceBlock>>>;
};

export type AlternativeCategory = {
  __typename?: 'AlternativeCategory';
  categoryList?: Maybe<Array<Maybe<Category>>>;
  subCategoryId?: Maybe<Scalars['Long']>;
};

export type AmazonRating = {
  __typename?: 'AmazonRating';
  asin?: Maybe<Scalars['String']>;
  averageRating?: Maybe<Scalars['Float']>;
  fiveStarRatingCount?: Maybe<Scalars['Int']>;
  fourStarRatingCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  lastAmazonApiCheckAt?: Maybe<Scalars['String']>;
  lastAmazonCheckFormatted?: Maybe<Scalars['String']>;
  oneStarRatingCount?: Maybe<Scalars['Int']>;
  ratingCount?: Maybe<Scalars['Int']>;
  /** URL zur Amazon-Produkt-Seite inkl. affiliate tag */
  ratingUrl?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  threeStarRatingCount?: Maybe<Scalars['Int']>;
  twoStarRatingCount?: Maybe<Scalars['Int']>;
};

export type Badge = {
  __typename?: 'Badge';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  categoryTree?: Maybe<Array<Maybe<CategoryTree>>>;
  directAncestorId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageSlug?: Maybe<Scalars['String']>;
  isLeaf: Scalars['Boolean'];
  layer: Scalars['Int'];
  matureContent: Scalars['Boolean'];
  metaDescription?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  oldBreadcrumb?: Maybe<Scalars['String']>;
  productFilterStatus: Scalars['Int'];
  productViewStyle: Scalars['String'];
  productViewStyleMobile: Scalars['String'];
  robotsIndex?: Maybe<Scalars['Int']>;
  seoTitle?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  subCategories?: Maybe<Array<Maybe<Category>>>;
  subCategoriesBetweenLayers?: Maybe<Array<Maybe<Category>>>;
  topAttributeLimit: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
  viewStyle: Scalars['String'];
};

export type CategorySubCategoriesBetweenLayersArgs = {
  firstLevel: Scalars['Int'];
  secondLevel: Scalars['Int'];
};

export type CategoryRecommendation = {
  __typename?: 'CategoryRecommendation';
  category?: Maybe<Category>;
  categoryId: Scalars['String'];
  editor?: Maybe<Editor>;
  editorId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type CategoryTree = {
  __typename?: 'CategoryTree';
  ancestorId?: Maybe<Scalars['String']>;
  categoryList?: Maybe<Array<Maybe<Category>>>;
};

export type Delivery = {
  __typename?: 'Delivery';
  color?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Editor = {
  __typename?: 'Editor';
  advicerDescription?: Maybe<Scalars['String']>;
  advicerSince?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hobbies?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imageSlug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  since?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  hd?: Maybe<Scalars['String']>;
  sd?: Maybe<Scalars['String']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logoSlug?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  /** Page startet default mit 1 und muss mindestens 1 sein */
  products?: Maybe<Array<Maybe<Product>>>;
  status: Scalars['Int'];
  street?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ManufacturerProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ManufacturerDetailPage = {
  __typename?: 'ManufacturerDetailPage';
  /** Page startet default mit 1 und muss mindestens 1 sein */
  categories?: Maybe<Array<Maybe<Category>>>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturerId: Scalars['String'];
  /** Page startet default mit 1 und muss mindestens 1 sein */
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ManufacturerDetailPageCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ManufacturerDetailPageProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Offer = {
  __typename?: 'Offer';
  bStock?: Maybe<Scalars['Boolean']>;
  badges?: Maybe<Array<Maybe<Badge>>>;
  /** @deprecated(reason: "It will be replaced by Delivery Object") */
  baseprice?: Maybe<Scalars['String']>;
  categoryIdIdealo?: Maybe<Scalars['String']>;
  contract?: Maybe<Scalars['Boolean']>;
  delivery?: Maybe<Delivery>;
  deliveryStatusId?: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "It will be replaced by Delivery Object") */
  deliveryStatusText?: Maybe<Scalars['String']>;
  deliveryText?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  downloadable?: Maybe<Scalars['Boolean']>;
  formerPrice?: Maybe<PriceFormat>;
  freeReturnDays?: Maybe<Scalars['String']>;
  hasCrossedPrice?: Maybe<Scalars['Boolean']>;
  hasFreeReturnShipping?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  merchantId?: Maybe<Scalars['String']>;
  merchantName?: Maybe<Scalars['String']>;
  minShippingCost?: Maybe<PriceFormat>;
  modified: Scalars['String'];
  name: Scalars['String'];
  openerOutLink?: Maybe<Scalars['String']>;
  paymentIdString?: Maybe<Scalars['String']>;
  price?: Maybe<PriceFormat>;
  priceWithShippingCosts?: Maybe<PriceFormat>;
  quantity?: Maybe<Scalars['Int']>;
  rebuild?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Shop>;
  shopId: Scalars['String'];
  shopIdIdealo: Scalars['String'];
  shopImageUrl?: Maybe<Scalars['String']>;
  shopInfoUrl?: Maybe<Scalars['String']>;
  shopRating?: Maybe<ShopRating>;
  shopUrl: Scalars['String'];
  /** @deprecated Das ist nur ein Test-Deprecated */
  status: Scalars['Int'];
  used?: Maybe<Scalars['Boolean']>;
  voucherCode?: Maybe<Scalars['String']>;
};

export type OfferHasCrossedPriceArgs = {
  productId: Scalars['String'];
};

export type OfferOpenerOutLinkArgs = {
  action?: InputMaybe<Scalars['String']>;
  element?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<Scalars['Int']>;
  productId: Scalars['String'];
  qid?: InputMaybe<Scalars['Int']>;
  section?: InputMaybe<Scalars['String']>;
};

export type OfferContext = {
  __typename?: 'OfferContext';
  currentPage?: Maybe<Scalars['Int']>;
  maxPage?: Maybe<Scalars['Int']>;
  offerCount?: Maybe<Scalars['Int']>;
  offerEnergyLabel?: Maybe<Array<Maybe<OfferEnergylabel>>>;
  offerFilterSet?: Maybe<OfferFilterSet>;
  offers?: Maybe<Array<Maybe<Offer>>>;
  pageSize?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Long']>;
};

export type OfferDeliveryCosts = {
  __typename?: 'OfferDeliveryCosts';
  label?: Maybe<Scalars['String']>;
  offerId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceFormatted?: Maybe<PriceFormat>;
  priceWithOffer?: Maybe<Scalars['Float']>;
  priceWithOfferFormatted?: Maybe<PriceFormat>;
};

export type OfferEnergylabel = {
  __typename?: 'OfferEnergylabel';
  efficiencyClass?: Maybe<Scalars['String']>;
  efficiencyRangeMax?: Maybe<Scalars['String']>;
  efficiencyRangeMin?: Maybe<Scalars['String']>;
  offerId: Scalars['Long'];
  tireExternalRollingNoise?: Maybe<Scalars['Int']>;
  tireExternalRollingNoiseClass?: Maybe<Scalars['String']>;
  tireFuelEfficiency?: Maybe<Scalars['String']>;
  tireIceGrip?: Maybe<Scalars['Boolean']>;
  tireSnowGrip?: Maybe<Scalars['Boolean']>;
  tireWetGripEfficiency?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Long']>;
};

export type OfferFilterBoolean = {
  __typename?: 'OfferFilterBoolean';
  enableFilter?: Maybe<Scalars['Boolean']>;
  offerCount?: Maybe<Scalars['Int']>;
  selectedValue?: Maybe<Scalars['Boolean']>;
  showFilter?: Maybe<Scalars['Boolean']>;
};

export type OfferFilterSet = {
  __typename?: 'OfferFilterSet';
  bStockOnlyFilter?: Maybe<OfferFilterBoolean>;
  discountOnlyFilter?: Maybe<OfferFilterBoolean>;
  fastDeliveryFilter?: Maybe<OfferFilterBoolean>;
  inclusiveDelivery?: Maybe<OfferFilterBoolean>;
  paymentIdFilter?: Maybe<OfferPaymentFilter>;
};

export type OfferPayment = {
  __typename?: 'OfferPayment';
  id: Scalars['String'];
  isSelected: Scalars['Boolean'];
  name: Scalars['String'];
  position: Scalars['Int'];
};

export type OfferPaymentFilter = {
  __typename?: 'OfferPaymentFilter';
  showFilter?: Maybe<Scalars['Boolean']>;
  values?: Maybe<Array<Maybe<OfferPayment>>>;
};

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  created?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logoFileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PriceFormat = {
  __typename?: 'PriceFormat';
  cent?: Maybe<Scalars['String']>;
  euro?: Maybe<Scalars['String']>;
  formattedPrice?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  alternativeCategory?: Maybe<Array<Maybe<AlternativeCategory>>>;
  alternativeName?: Maybe<Scalars['String']>;
  amazonRating?: Maybe<AmazonRating>;
  asinId?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<TypedJsonAttribute>>>;
  averagePrice?: Maybe<PriceFormat>;
  badges?: Maybe<Array<Maybe<Badge>>>;
  bestDeliveryStatusId?: Maybe<Scalars['Int']>;
  bestOffer?: Maybe<Offer>;
  breadcrumb?: Maybe<Array<Maybe<Category>>>;
  categoryRank?: Maybe<Scalars['Int']>;
  classification: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  defaultDesiredPrice?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  energyLabel?: Maybe<ProductEnergyLabel>;
  id: Scalars['String'];
  imageSlug?: Maybe<Scalars['String']>;
  /** Page startet default mit 1 und muss mindestens 1 sein */
  images?: Maybe<Array<Maybe<ProductImage>>>;
  isGeneralProduct: Scalars['Boolean'];
  isLightingCategory?: Maybe<Scalars['Boolean']>;
  isTireCategory?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturerId?: Maybe<Scalars['String']>;
  maxPrice?: Maybe<PriceFormat>;
  metaDescription?: Maybe<Scalars['String']>;
  minBaseprice?: Maybe<Scalars['String']>;
  minPrice?: Maybe<PriceFormat>;
  minPriceBStock?: Maybe<PriceFormat>;
  name: Scalars['String'];
  nextCategoryRecommendation?: Maybe<CategoryRecommendation>;
  /** Enthält alle Offer-Relevanten Informationen und die Offer selbst. Bei Aufruf von offerContext werden bereits alle Offer ermittelt. Page startet default mit 1 und muss mindestens 1 sein */
  offerContext?: Maybe<OfferContext>;
  offerCount?: Maybe<Scalars['Int']>;
  offerCountBStock?: Maybe<Scalars['Int']>;
  offerCountFastDelivery?: Maybe<Scalars['Int']>;
  overallRating?: Maybe<Scalars['String']>;
  parentCategory?: Maybe<Category>;
  parentCategoryId: Scalars['String'];
  parentProduct?: Maybe<Product>;
  parentProductId?: Maybe<Scalars['String']>;
  preisdeRank?: Maybe<Scalars['Int']>;
  priceTrend?: Maybe<ProductPriceTrend>;
  productDepositInfo?: Maybe<ProductWarning>;
  productKeyfacts?: Maybe<Array<Maybe<ProductKeyfact>>>;
  productNumbers?: Maybe<Array<Maybe<ProductNumber>>>;
  productProContras?: Maybe<Array<Maybe<ProductProContra>>>;
  productRecommendation?: Maybe<ProductRecommendation>;
  /** Page startet default mit 1 und muss mindestens 1 sein */
  productVariants?: Maybe<Array<Maybe<Product>>>;
  productWarning?: Maybe<ProductWarning>;
  ratingNumber?: Maybe<Scalars['Int']>;
  robotsIndex?: Maybe<Scalars['Boolean']>;
  savingAbsolute?: Maybe<PriceFormat>;
  savingRate?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  testContext?: Maybe<TestContext>;
  topProductsByCategory?: Maybe<Array<Maybe<Product>>>;
  topProductsByManufacturer?: Maybe<Array<Maybe<Product>>>;
  url: Scalars['String'];
  userManualUrl?: Maybe<Scalars['String']>;
  variantCount: Scalars['Int'];
  variantName?: Maybe<Scalars['String']>;
  /** Page startet default mit 1 und muss mindestens 1 sein */
  videos?: Maybe<Array<Maybe<ProductVideo>>>;
};

export type ProductImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ProductOfferContextArgs = {
  bStockOnly?: InputMaybe<Scalars['Boolean']>;
  device?: InputMaybe<Scalars['String']>;
  discountOnly?: InputMaybe<Scalars['Boolean']>;
  fastDelivery?: InputMaybe<Scalars['Boolean']>;
  inclusiveDelivery?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offerSemOnly?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  paymentIds?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
};

export type ProductProductVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ProductVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ProductDetailPage = {
  __typename?: 'ProductDetailPage';
  product?: Maybe<Product>;
  productId: Scalars['String'];
};

export type ProductEnergyLabel = {
  __typename?: 'ProductEnergyLabel';
  efficiencyClass?: Maybe<Scalars['String']>;
  efficiencyRangeMax?: Maybe<Scalars['String']>;
  efficiencyRangeMin?: Maybe<Scalars['String']>;
  energyDatasheetUrl?: Maybe<Scalars['String']>;
  label2021?: Maybe<Scalars['Boolean']>;
  labelUrl?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['Long']>;
  providerType?: Maybe<Scalars['String']>;
  tireExternalRollingNoise?: Maybe<Scalars['Int']>;
  tireExternalRollingNoiseClass?: Maybe<Scalars['String']>;
  tireFuelEfficiency?: Maybe<Scalars['String']>;
  tireIceGrip?: Maybe<Scalars['Boolean']>;
  tireSnowGrip?: Maybe<Scalars['Boolean']>;
  tireWetGripEfficiency?: Maybe<Scalars['String']>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  hd?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  imageSlug?: Scalars['String'];
  manuallySelected?: Scalars['Boolean'];
  offerId?: Maybe<Scalars['String']>;
  position?: Scalars['Int'];
  productId?: Scalars['String'];
  sd?: Maybe<Scalars['String']>;
  setLinkToSource?: Maybe<Scalars['Boolean']>;
  shopId?: Maybe<Scalars['String']>;
  status?: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  type?: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  urlOrigin?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ProductKeyfact = {
  __typename?: 'ProductKeyfact';
  id: Scalars['Long'];
  keyfact?: Maybe<Scalars['String']>;
  productId: Scalars['Long'];
  sort?: Maybe<Scalars['Int']>;
};

export type ProductNumber = {
  __typename?: 'ProductNumber';
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductPriceHistory = {
  __typename?: 'ProductPriceHistory';
  average?: Maybe<PriceFormat>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  price?: Maybe<PriceFormat>;
};

export type ProductPriceTrend = {
  __typename?: 'ProductPriceTrend';
  id: Scalars['String'];
  mean?: Maybe<PriceFormat>;
  median?: Maybe<PriceFormat>;
  productId?: Maybe<Scalars['String']>;
  savingAbsolute?: Maybe<PriceFormat>;
  savingRate?: Maybe<Scalars['Int']>;
};

export type ProductProContra = {
  __typename?: 'ProductProContra';
  argument?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  productId: Scalars['Long'];
  sort?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductRecommendation = {
  __typename?: 'ProductRecommendation';
  categoryRecommendationId: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  createdFormatted?: Maybe<Scalars['String']>;
  iconFileName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
  recommendationLabel?: Maybe<RecommendationLabel>;
  recommendationLabelId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type ProductTest = {
  __typename?: 'ProductTest';
  edition?: Maybe<Scalars['String']>;
  gradeName?: Maybe<Scalars['String']>;
  gradeValue?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imagehd?: Maybe<Scalars['String']>;
  imagesd?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
  publisherLogoSlug?: Maybe<Scalars['String']>;
  publisherName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  testPublisherId: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ProductVideo = {
  __typename?: 'ProductVideo';
  code?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  productId: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  providerVideoId: Scalars['String'];
  status: Scalars['Int'];
  url: Scalars['String'];
  videoId: Scalars['String'];
};

export type ProductWarning = {
  __typename?: 'ProductWarning';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  adsensePlaceInformation?: Maybe<AdsensePlaceInformation>;
  bestHistoricalProductPriceIndex?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  editors?: Maybe<Array<Maybe<Editor>>>;
  manufacturer?: Maybe<Manufacturer>;
  /** @deprecated No more queries for the entire page */
  manufacturerDetailPage?: Maybe<ManufacturerDetailPage>;
  offerDeliveryCosts?: Maybe<Array<Maybe<OfferDeliveryCosts>>>;
  primaryCategories?: Maybe<Array<Maybe<Category>>>;
  product?: Maybe<Product>;
  /** @deprecated No more queries for the entire page */
  productDetailPage?: Maybe<ProductDetailPage>;
  productPriceHistory?: Maybe<Array<Maybe<ProductPriceHistory>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  shop?: Maybe<Shop>;
  splitTest?: Maybe<Array<Maybe<SplitTest>>>;
};

export type QueryAdsensePlaceInformationArgs = {
  channelId?: InputMaybe<Scalars['String']>;
};

export type QueryBestHistoricalProductPriceIndexArgs = {
  month?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
};

export type QueryCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryManufacturerArgs = {
  id: Scalars['ID'];
};

export type QueryManufacturerDetailPageArgs = {
  manufacturerId: Scalars['ID'];
};

export type QueryOfferDeliveryCostsArgs = {
  offerId: Scalars['String'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductDetailPageArgs = {
  productId: Scalars['ID'];
};

export type QueryProductPriceHistoryArgs = {
  month?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
};

export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  productIds: Array<InputMaybe<Scalars['Long']>>;
};

export type QueryShopArgs = {
  id: Scalars['ID'];
};

export type QuerySplitTestArgs = {
  pagetype: Scalars['String'];
};

export type RecommendationLabel = {
  __typename?: 'RecommendationLabel';
  iconmoonClass?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type Shop = {
  __typename?: 'Shop';
  clickprice?: Maybe<Scalars['Float']>;
  creditCardNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  cryptedCPC?: Maybe<Scalars['Int']>;
  formattedLastPriceCheck?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Image>;
  infoUrl?: Maybe<Scalars['String']>;
  lastPricelistCheck?: Maybe<Scalars['String']>;
  mobileFriendly?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  offersForSem?: Maybe<Scalars['Boolean']>;
  paymentProvider?: Maybe<Array<Maybe<PaymentProvider>>>;
  shippingNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  shopLogoSlug?: Maybe<Scalars['String']>;
};

export type ShopRating = {
  __typename?: 'ShopRating';
  merchantId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  ratingCount?: Maybe<Scalars['Int']>;
  ratingStars?: Maybe<Scalars['Float']>;
  shopId: Scalars['String'];
  sourceUrl?: Maybe<Scalars['String']>;
};

export type SplitTest = {
  __typename?: 'SplitTest';
  nGroups: Scalars['Int'];
  name: Scalars['String'];
  pagetype?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['String']>;
  trafficPercentage: Scalars['Int'];
};

export type TestContext = {
  __typename?: 'TestContext';
  gradeName?: Maybe<Scalars['String']>;
  gradeValue?: Maybe<Scalars['String']>;
  productTestWithText?: Maybe<Array<Maybe<ProductTest>>>;
  productTestWithoutText?: Maybe<Array<Maybe<ProductTest>>>;
  ratio?: Maybe<Scalars['String']>;
  testAverageValue?: Maybe<Scalars['Float']>;
  testCount?: Maybe<Scalars['Int']>;
};

export type TypedJsonAttribute = {
  __typename?: 'TypedJsonAttribute';
  attributeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  stringValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit?: Maybe<Scalars['String']>;
};

export type GetOfferDataQueryVariables = Exact<{
  id: Scalars['ID'];
  page: Scalars['Int'];
  productId: Scalars['String'];
  fastDelivery?: InputMaybe<Scalars['Boolean']>;
  reduced?: InputMaybe<Scalars['Boolean']>;
  withShipping?: InputMaybe<Scalars['Boolean']>;
  onlyUsed?: InputMaybe<Scalars['Boolean']>;
  paymentIds?: InputMaybe<
    Array<InputMaybe<Scalars['Long']>> | InputMaybe<Scalars['Long']>
  >;
  limit?: InputMaybe<Scalars['Int']>;
  section?: InputMaybe<Scalars['String']>;
  action?: InputMaybe<Scalars['String']>;
  element?: InputMaybe<Scalars['String']>;
}>;

export type GetOfferDataQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'Product';
    offerContext?: {
      __typename?: 'OfferContext';
      maxPage?: number | null;
      currentPage?: number | null;
      pageSize?: number | null;
      offerCount?: number | null;
      offerEnergyLabel?: Array<{
        __typename?: 'OfferEnergylabel';
        offerId: any;
        efficiencyClass?: string | null;
        efficiencyRangeMin?: string | null;
        efficiencyRangeMax?: string | null;
        version?: any | null;
      } | null> | null;
      offerFilterSet?: {
        __typename?: 'OfferFilterSet';
        fastDeliveryFilter?: {
          __typename?: 'OfferFilterBoolean';
          selectedValue?: boolean | null;
          showFilter?: boolean | null;
          enableFilter?: boolean | null;
        } | null;
        inclusiveDelivery?: {
          __typename?: 'OfferFilterBoolean';
          selectedValue?: boolean | null;
          showFilter?: boolean | null;
          enableFilter?: boolean | null;
        } | null;
        bStockOnlyFilter?: {
          __typename?: 'OfferFilterBoolean';
          selectedValue?: boolean | null;
          showFilter?: boolean | null;
          enableFilter?: boolean | null;
        } | null;
        paymentIdFilter?: {
          __typename?: 'OfferPaymentFilter';
          showFilter?: boolean | null;
          values?: Array<{
            __typename?: 'OfferPayment';
            id: string;
            name: string;
            position: number;
            isSelected: boolean;
          } | null> | null;
        } | null;
      } | null;
      offers?: Array<{
        __typename?: 'Offer';
        id: string;
        name: string;
        voucherCode?: string | null;
        baseprice?: string | null;
        shopImageUrl?: string | null;
        modified: string;
        openerOutLink?: string | null;
        shopInfoUrl?: string | null;
        merchantName?: string | null;
        deliveryText?: string | null;
        freeReturnDays?: string | null;
        hasFreeReturnShipping?: boolean | null;
        badges?: Array<{
          __typename?: 'Badge';
          name?: string | null;
          value?: string | null;
        } | null> | null;
        price?: {
          __typename?: 'PriceFormat';
          euro?: string | null;
          cent?: string | null;
        } | null;
        minShippingCost?: {
          __typename?: 'PriceFormat';
          price?: number | null;
          formattedPrice?: string | null;
        } | null;
        priceWithShippingCosts?: {
          __typename?: 'PriceFormat';
          euro?: string | null;
          cent?: string | null;
          formattedPrice?: string | null;
        } | null;
        formerPrice?: {
          __typename?: 'PriceFormat';
          formattedPrice?: string | null;
        } | null;
        shop?: {
          __typename?: 'Shop';
          name?: string | null;
          mobileFriendly?: boolean | null;
          shippingNames?: Array<string | null> | null;
          image?: {
            __typename?: 'Image';
            sd?: string | null;
            hd?: string | null;
          } | null;
        } | null;
        shopRating?: {
          __typename?: 'ShopRating';
          rating?: number | null;
          ratingCount?: number | null;
        } | null;
        delivery?: {
          __typename?: 'Delivery';
          color?: string | null;
          text?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetShippingCostsQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetShippingCostsQuery = {
  __typename?: 'Query';
  offerDeliveryCosts?: Array<{
    __typename?: 'OfferDeliveryCosts';
    offerId?: string | null;
    price?: number | null;
    label?: string | null;
    priceWithOfferFormatted?: {
      __typename?: 'PriceFormat';
      formattedPrice?: string | null;
    } | null;
    priceFormatted?: {
      __typename?: 'PriceFormat';
      formattedPrice?: string | null;
    } | null;
  } | null> | null;
};

export type GetPriceTrendQueryVariables = Exact<{
  id: Scalars['ID'];
  month?: InputMaybe<Scalars['String']>;
}>;

export type GetPriceTrendQuery = {
  __typename?: 'Query';
  bestHistoricalProductPriceIndex?: number | null;
  productPriceHistory?: Array<{
    __typename?: 'ProductPriceHistory';
    id: string;
    date?: string | null;
    label?: string | null;
    price?: {
      __typename?: 'PriceFormat';
      price?: number | null;
      euro?: string | null;
      cent?: string | null;
      formattedPrice?: string | null;
    } | null;
    average?: {
      __typename?: 'PriceFormat';
      price?: number | null;
      euro?: string | null;
      cent?: string | null;
      formattedPrice?: string | null;
    } | null;
  } | null> | null;
};

export type GetProductDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
  productId: Scalars['String'];
}>;

export type GetProductDetailsQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'Product';
    id: string;
    name: string;
    url: string;
    robotsIndex?: boolean | null;
    classification: string;
    status: number;
    created?: string | null;
    manufacturerId?: string | null;
    alternativeName?: string | null;
    isGeneralProduct: boolean;
    isTireCategory?: boolean | null;
    isLightingCategory?: boolean | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    preisdeRank?: number | null;
    categoryRank?: number | null;
    variantCount: number;
    offerCount?: number | null;
    offerCountBStock?: number | null;
    offerCountFastDelivery?: number | null;
    minBaseprice?: string | null;
    overallRating?: string | null;
    shortDescription?: string | null;
    description?: string | null;
    userManualUrl?: string | null;
    defaultDesiredPrice?: string | null;
    savingRate?: number | null;
    breadcrumb?: Array<{
      __typename?: 'Category';
      id: string;
      shortName?: string | null;
      name: string;
      url: string;
    } | null> | null;
    images?: Array<{
      __typename?: 'ProductImage';
      sd?: string | null;
      hd?: string | null;
      width?: number | null;
      height?: number | null;
      text?: string | null;
      imageSlug: string;
      setLinkToSource?: boolean | null;
      urlOrigin?: string | null;
    } | null> | null;
    videos?: Array<{
      __typename?: 'ProductVideo';
      url: string;
      image: string;
      code?: string | null;
    } | null> | null;
    minPrice?: {
      __typename?: 'PriceFormat';
      price?: number | null;
      euro?: string | null;
      cent?: string | null;
      formattedPrice?: string | null;
    } | null;
    minPriceBStock?: {
      __typename?: 'PriceFormat';
      price?: number | null;
      euro?: string | null;
      cent?: string | null;
      formattedPrice?: string | null;
    } | null;
    maxPrice?: {
      __typename?: 'PriceFormat';
      price?: number | null;
      formattedPrice?: string | null;
    } | null;
    parentCategory?: {
      __typename?: 'Category';
      id: string;
      name: string;
      productViewStyle: string;
      status: number;
      url: string;
    } | null;
    energyLabel?: {
      __typename?: 'ProductEnergyLabel';
      energyDatasheetUrl?: string | null;
      efficiencyClass?: string | null;
      efficiencyRangeMin?: string | null;
      efficiencyRangeMax?: string | null;
      label2021?: boolean | null;
      labelUrl?: string | null;
      tireFuelEfficiency?: string | null;
      tireWetGripEfficiency?: string | null;
      tireExternalRollingNoise?: number | null;
      tireExternalRollingNoiseClass?: string | null;
      tireIceGrip?: boolean | null;
      tireSnowGrip?: boolean | null;
    } | null;
    amazonRating?: {
      __typename?: 'AmazonRating';
      id: string;
      asin?: string | null;
      averageRating?: number | null;
      ratingCount?: number | null;
      ratio?: string | null;
      ratingUrl?: string | null;
      fiveStarRatingCount?: number | null;
      fourStarRatingCount?: number | null;
      threeStarRatingCount?: number | null;
      twoStarRatingCount?: number | null;
      oneStarRatingCount?: number | null;
      lastAmazonCheckFormatted?: string | null;
    } | null;
    testContext?: {
      __typename?: 'TestContext';
      testCount?: number | null;
      gradeName?: string | null;
      gradeValue?: string | null;
      ratio?: string | null;
      testAverageValue?: number | null;
      productTestWithText?: Array<{
        __typename?: 'ProductTest';
        imagesd?: string | null;
        imagehd?: string | null;
        publisherName?: string | null;
        gradeName?: string | null;
        gradeValue?: string | null;
        edition?: string | null;
        text?: string | null;
      } | null> | null;
      productTestWithoutText?: Array<{
        __typename?: 'ProductTest';
        imagesd?: string | null;
        imagehd?: string | null;
        publisherName?: string | null;
        gradeName?: string | null;
        gradeValue?: string | null;
        edition?: string | null;
      } | null> | null;
    } | null;
    productRecommendation?: {
      __typename?: 'ProductRecommendation';
      iconFileName?: string | null;
      createdFormatted?: string | null;
      content?: string | null;
      recommendationLabel?: {
        __typename?: 'RecommendationLabel';
        name?: string | null;
      } | null;
    } | null;
    productWarning?: {
      __typename?: 'ProductWarning';
      name?: string | null;
      value?: string | null;
    } | null;
    productDepositInfo?: {
      __typename?: 'ProductWarning';
      name?: string | null;
      value?: string | null;
    } | null;
    productKeyfacts?: Array<{
      __typename?: 'ProductKeyfact';
      keyfact?: string | null;
    } | null> | null;
    nextCategoryRecommendation?: {
      __typename?: 'CategoryRecommendation';
      editor?: {
        __typename?: 'Editor';
        name?: string | null;
        image?: string | null;
      } | null;
      category?: { __typename?: 'Category'; name: string } | null;
    } | null;
    productProContras?: Array<{
      __typename?: 'ProductProContra';
      type?: string | null;
      argument?: string | null;
    } | null> | null;
    manufacturer?: {
      __typename?: 'Manufacturer';
      name: string;
      url: string;
      homepage?: string | null;
    } | null;
    attributes?: Array<{
      __typename?: 'TypedJsonAttribute';
      name?: string | null;
      description?: string | null;
      stringValues?: Array<string | null> | null;
      unit?: string | null;
    } | null> | null;
    productNumbers?: Array<{
      __typename?: 'ProductNumber';
      name?: string | null;
      values?: Array<string | null> | null;
    } | null> | null;
    bestOffer?: {
      __typename?: 'Offer';
      openerOutLink?: string | null;
      baseprice?: string | null;
      deliveryText?: string | null;
      shopInfoUrl?: string | null;
      merchantName?: string | null;
      modified: string;
      price?: {
        __typename?: 'PriceFormat';
        price?: number | null;
        euro?: string | null;
        cent?: string | null;
        formattedPrice?: string | null;
      } | null;
      minShippingCost?: {
        __typename?: 'PriceFormat';
        price?: number | null;
        formattedPrice?: string | null;
      } | null;
      delivery?: {
        __typename?: 'Delivery';
        color?: string | null;
        text?: string | null;
      } | null;
      shop?: { __typename?: 'Shop'; name?: string | null } | null;
    } | null;
    averagePrice?: {
      __typename?: 'PriceFormat';
      euro?: string | null;
      cent?: string | null;
    } | null;
    priceTrend?: { __typename?: 'ProductPriceTrend'; id: string } | null;
    parentProduct?: {
      __typename?: 'Product';
      url: string;
      name: string;
      images?: Array<{
        __typename?: 'ProductImage';
        sd?: string | null;
        hd?: string | null;
        width?: number | null;
        height?: number | null;
      } | null> | null;
      energyLabel?: {
        __typename?: 'ProductEnergyLabel';
        label2021?: boolean | null;
        efficiencyClass?: string | null;
        efficiencyRangeMin?: string | null;
        efficiencyRangeMax?: string | null;
      } | null;
      badges?: Array<{
        __typename?: 'Badge';
        name?: string | null;
        value?: string | null;
      } | null> | null;
    } | null;
    productVariants?: Array<{
      __typename?: 'Product';
      id: string;
      url: string;
      name: string;
      variantName?: string | null;
      minBaseprice?: string | null;
      images?: Array<{
        __typename?: 'ProductImage';
        sd?: string | null;
        hd?: string | null;
        width?: number | null;
        height?: number | null;
      } | null> | null;
      energyLabel?: {
        __typename?: 'ProductEnergyLabel';
        label2021?: boolean | null;
        efficiencyClass?: string | null;
        efficiencyRangeMin?: string | null;
        efficiencyRangeMax?: string | null;
      } | null;
      badges?: Array<{
        __typename?: 'Badge';
        name?: string | null;
        value?: string | null;
      } | null> | null;
      minPrice?: {
        __typename?: 'PriceFormat';
        euro?: string | null;
        cent?: string | null;
      } | null;
      minPriceBStock?: {
        __typename?: 'PriceFormat';
        euro?: string | null;
        cent?: string | null;
      } | null;
    } | null> | null;
    topProductsByCategory?: Array<{
      __typename?: 'Product';
      id: string;
      name: string;
      url: string;
      minBaseprice?: string | null;
      images?: Array<{
        __typename?: 'ProductImage';
        sd?: string | null;
        hd?: string | null;
        width?: number | null;
        height?: number | null;
      } | null> | null;
      minPrice?: {
        __typename?: 'PriceFormat';
        euro?: string | null;
        cent?: string | null;
        formattedPrice?: string | null;
      } | null;
      minPriceBStock?: {
        __typename?: 'PriceFormat';
        euro?: string | null;
        cent?: string | null;
        formattedPrice?: string | null;
      } | null;
      energyLabel?: {
        __typename?: 'ProductEnergyLabel';
        efficiencyClass?: string | null;
        efficiencyRangeMin?: string | null;
        efficiencyRangeMax?: string | null;
        label2021?: boolean | null;
      } | null;
    } | null> | null;
    topProductsByManufacturer?: Array<{
      __typename?: 'Product';
      id: string;
      name: string;
      url: string;
      minBaseprice?: string | null;
      images?: Array<{
        __typename?: 'ProductImage';
        sd?: string | null;
        hd?: string | null;
        width?: number | null;
        height?: number | null;
      } | null> | null;
      minPrice?: {
        __typename?: 'PriceFormat';
        euro?: string | null;
        cent?: string | null;
        formattedPrice?: string | null;
      } | null;
      minPriceBStock?: {
        __typename?: 'PriceFormat';
        euro?: string | null;
        cent?: string | null;
        formattedPrice?: string | null;
      } | null;
      energyLabel?: {
        __typename?: 'ProductEnergyLabel';
        efficiencyClass?: string | null;
        efficiencyRangeMin?: string | null;
        efficiencyRangeMax?: string | null;
        label2021?: boolean | null;
      } | null;
    } | null> | null;
  } | null;
};

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk() {
  return {
    async getOfferData(
      variables: GetOfferDataQueryVariables
    ): Promise<{ data: GetOfferDataQuery; status: number }> {
      return { status: 200, data: OfferData };
    },
    async getShippingCosts(
      variables: GetShippingCostsQueryVariables
    ): Promise<{ data: GetShippingCostsQuery; status: number }> {
      return { status: 200, data: ShippingCostData as GetShippingCostsQuery };
    },
    async GetPriceTrend(
      variables: GetPriceTrendQueryVariables
    ): Promise<{ data: GetPriceTrendQuery; status: number }> {
      return PriceTrendData;
    },
    async getProductDetails(
      variables: GetProductDetailsQueryVariables
    ): Promise<{
      data: GetProductDetailsQuery;
      extensions?: any;
      status: number;
    }> {
      return { status: 200, data: ProductDetailsData };
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
