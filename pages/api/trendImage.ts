/***
 * This should might be extracted from this project, maybe create an akamai bridge in future to cache it
 * (caching would need to keep trend data in sync)
 *
 * Overall it's needed to provide a non JS version for fast initial load
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import GraphQLClient from '@graphql/graphQLClient';
import {
  getChartData,
  getChartOptions,
  getCompactChartData,
  getCompactChartOptions,
} from '@helpers/trendHelper';

import Chart from 'chart.js/auto';
import {
  SvgCanvas,
  Rect2D,
  SvgCanvas2DGradient,
} from 'red-agate-svg-canvas/modules';
const g = Function('return this')();
/**
 * @source https://github.com/shellyln/chart.js-node-ssr-example
 * @param request
 * @param res
 */
export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const {
    query: { productId, range, isCompact },
  } = request;
  let compactMode = false;
  if (typeof productId != 'string') {
    throw new Error('Multiple Products are currently not available');
  }
  if (!range) {
    throw new Error('Range has to bet set');
  }
  if (typeof range != 'string') {
    throw new Error('Range has to be a number (month count)');
  }
  if (isCompact) {
    compactMode = true;
  }
  const priceTrendResponse = await GraphQLClient.GetPriceTrend({
    month: range,
    id: productId,
  });
  const priceTrendData = priceTrendResponse.data.productPriceHistory;
  if (!priceTrendData) {
    throw new Error(
      'There was an issue during load ' + productId + ' ' + range
    );
  }
  const options = compactMode
    ? (getCompactChartOptions(priceTrendData) as object)
    : (getChartOptions(priceTrendData) as object);
  const chartData = compactMode
    ? getCompactChartData(priceTrendData)
    : getChartData(priceTrendData);

  const compactSize = {
    width: 293,
    height: 148,
    style: {
      width: '293px',
      height: '148px',
    },
  };
  const modalSize = {
    width: 290,
    height: 148,
    style: {
      width: '290px',
      height: '148px',
    },
  };
  // SvgCanvas has a "CanvasRenderingContext2D"-compatible interface.
  const ctx = new SvgCanvas();

  // SvgCanvas lacks the canvas property.
  (ctx as any).canvas = compactMode ? compactSize : modalSize;
  // SvgCanvas does not have font glyph information,
  // so manually set the ratio of (font height / font width).
  ctx.fontHeightRatio = 2;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  ctx.resetTransform = () => 'exist';

  // Chart.js needs a "HTMLCanvasElement"-like interface that has "getContext()" method.
  // "getContext()" should returns a "CanvasRenderingContext2D"-compatible interface.
  const el = { getContext: () => ctx };

  // If "devicePixelRatio" is not set, Chart.js get the devicePixelRatio from "window" object.
  // node.js environment has no window object.

  // Chart.js needs the "CanvasGradient" in the global scope.
  const savedGradient = g.CanvasGradient;
  g.CanvasGradient = SvgCanvas2DGradient;
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const chart = new Chart(el as any, {
      type: 'line',
      data: chartData,
      options: options,
    });
  } finally {
    if (savedGradient) {
      g.CanvasGradient = savedGradient;
    }
  }

  // Render as SVG.
  const svgString = ctx.render(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    new Rect2D(0, 0, ctx.canvas.width, ctx.canvas.height),
    'px'
  );

  debugger;
  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
    'Content-Length': svgString.length,
  });
  res.write(svgString);
  res.end();
}
