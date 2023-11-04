export interface OfferData {
  offer: Offer;
  count: Count;
  matched_tokens: string[] | null;
}

export interface Offer {
  firstResultsetOffer: FirstResultsetOffer[];
}

export interface FirstResultsetOffer {
  baseprice: string;
  old_price: string;
  id: string;
  code: string;
  title: string;
  ean: string;
  delivery_status_id: string;
  manufacturer_id_preisde: string;
  discount: string;
  shop_id: string;
  b_stock: string;
  shop_image_url: string;
  image_url: string;
  delivery_text: string;
  shipping_costs: string;
  shop_url: string;
  shopname: string;
  provider: string;
  price: string;
  price_with_shipping_costs: string;
  bewertung_gesamt: string;
  bewertung: string;
  info_url: string;
  product_id: string;
  voucher_code: string;
  merchant_name: string;
  merchant_id: string;
  cpc_modified: number;
  score: number;
}

export interface Count {
  count: string;
  limit: number;
  offset: number;
  countAfterDbStatusCheck: number;
  offer_count_elastic: number;
  selected_out_by_sdtc: number;
  selected_out_by_db_status_check: number;
}
