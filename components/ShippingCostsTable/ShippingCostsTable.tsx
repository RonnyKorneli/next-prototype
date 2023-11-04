import { OfferDeliveryCosts } from '@graphql/generated/client';

type ShippingCostTableType = {
  shippingCosts: (OfferDeliveryCosts | null)[];
};

export default function ShippingCostTable({
  shippingCosts,
}: ShippingCostTableType) {
  return (
    <table className="mt-5 mb-4">
      <thead>
        <tr>
          <th className="w-1/3 border border-solid border-grey-light-30 py-1 px-2 text-center">
            Zahlungs<span className="md:hidden">- </span>optionen
          </th>
          <th className="w-1/3 border border-solid border-grey-light-30 py-1 px-2 text-center">
            Versand<span className="md:hidden">- </span>kosten
          </th>
          <th className="total w-1/3 border border-solid border-grey-light-30 bg-grey-light-50 py-1 px-2 text-center">
            Gesamtpreis
          </th>
        </tr>
      </thead>
      <tbody>
        {shippingCosts.map((shippingCost, key: number) => {
          if (!shippingCost) return <></>;
          if (!shippingCost.priceFormatted) return <></>;
          if (!shippingCost.priceWithOfferFormatted) return <></>;
          return (
            <tr key={key}>
              <td className="w-1/3 border border-solid border-grey-light-30 py-1 px-2 text-center">
                {shippingCost.label}
              </td>
              <td className="w-1/3 border border-solid border-grey-light-30 py-1 px-2 text-center">
                {shippingCost.priceFormatted.formattedPrice}
              </td>
              <td className="w-1/3 border border-solid border-grey-light-30 bg-grey-light-50 py-1 px-2 text-center">
                {shippingCost.priceWithOfferFormatted.formattedPrice}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
