// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { OfferData } from '../../../styles/types/getOffers';
import slugify from '@helpers/Slugify';
import imgHash from '@helpers/Image';

const requestData: {
  query: string;
  isInSearchwordBlacklist: boolean;
  offset: number;
  limit: number;
  sort: string;
  resultSet: string;
  user_agent: string;
  device: string;
  excludeShop: string;
  fallbackWithoutEbay: boolean;
  preis_aff_id: string;
  excludeProvider: string;
  shop_cpc_weight_second: string;
  idsFirstResultSet: string;
  strategy_type: string;
} = {
  query: 'sneaker',
  isInSearchwordBlacklist: false,
  offset: 0,
  limit: 100,
  sort: 'rating',
  resultSet: 'first',
  user_agent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3694.0 Safari/537.36 Chrome-Lighthouse',
  device: 'desktop',
  excludeShop: '117,4646,7447,8794,8893',
  fallbackWithoutEbay: false,
  preis_aff_id: '0000-hotel-1111',
  excludeProvider: 'AMZDE,EBYDE',
  shop_cpc_weight_second: '0.5',
  idsFirstResultSet: '',
  strategy_type: 'all_in_one_query',
};

type Response = {
  message: string;
  data: OfferData | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const {
    query: { query, offset = 0 },
  } = req;

  requestData.offset = Number(offset);
  requestData.query = query?.toString() || '';

  switch (req.method) {
    case 'GET': {
      const data = await fetch(
        process.env.SEARCH_SERVICE_URL + 'offer/campaign',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      ).then((response) => response.json());
      data.count.offset = offset;

      //TODO: Need to find a better place for this
      for (const singleOffer of data.offer.firstResultsetOffer) {
        const imgurl =
          'https://cdn.preis.de/i/o/' +
          singleOffer.id +
          '/' +
          250 +
          'x' +
          250 +
          '/90/1/' +
          slugify(singleOffer.code) +
          '.jpg?p=' +
          imgHash(singleOffer.shop_image_url);

        singleOffer.image_url = imgurl;
      }

      return res.status(200).json({ message: 'OK', data: data });
    }
    default: {
      // All other methods
      return res
        .status(405)
        .json({ message: 'Method not allowed', data: null });
    }
  }
}
