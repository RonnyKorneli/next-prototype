import Head from 'next/head';
import InfinityOfferList from '@components/InfinityOfferList';
import { OfferData } from '../styles/types/getOffers';

interface Response {
  message: string;
  data: OfferData;
}

type ResponseData = {
  responseData: Response;
};

export default function Sem({ responseData }: ResponseData) {
  console.log(responseData.data);
  return (
    <>
      <Head>
        <title>Sem ist toll</title>
      </Head>
      <h1 className="text-4xl font-bold">Page SEM</h1>
      <div>
        <InfinityOfferList data={responseData.data} />
      </div>
    </>
  );
}

type Query = {
  query: {
    query: string;
  };
};

export async function getServerSideProps({ query }: Query) {
  const response = await fetch(
    `${process.env.NEXT_API_HOST}/api/sem/getOffers?query=${query.query}`
  );
  const responseData: Response = await response.json();
  return {
    props: { responseData },
  };
}
