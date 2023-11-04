import { useEffect, useRef, useState } from 'react';

import {
  getCompactChartOptions,
  getCompactChartData,
} from '@helpers/trendHelper';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  selectPriceTrendHistory,
  selectPriceTrendRange,
} from '@store/server/TrendDataSlice';
import { selectProductId } from '@store/server/ProductSlice';

ChartJS.register(Filler);

function triggerTooltip(chart: ChartJS | null) {
  const tooltip = chart?.tooltip;

  if (!tooltip || typeof tooltip !== 'object') {
    return;
  }

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  }

  const { chartArea } = chart;
  const lastPosition = chart.data.datasets[0].data.length - 1;

  tooltip.setActiveElements(
    [
      {
        datasetIndex: 0,
        index: lastPosition,
      },
    ],
    {
      x: (chartArea.left + chartArea.right) / 2,
      y: (chartArea.top + chartArea.bottom) / 2,
    }
  );

  chart.update();
}
export default function TrendCompact() {
  const rawData = useSelector(selectPriceTrendHistory);
  const range = useSelector(selectPriceTrendRange);
  const productId = useSelector(selectProductId);

  const chartRef = useRef<ChartJS>(null);

  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    const chart = chartRef.current;
    triggerTooltip(chart);
    setClientLoaded(true);
  }, []);

  if (!rawData) {
    return <></>;
  }
  const options = getCompactChartOptions(rawData);
  const chartData = getCompactChartData(rawData);

  return (
    <div
      className="canvas-wrapper"
      id="trend_preview"
      data-gtm="price-trend-preview"
      style={{
        display: 'block',
        boxSizing: 'border-box',
        height: '145px',
        width: '290px',
      }}
    >
      {!clientLoaded && (
        <img
          width="100%"
          height="100%"
          className=""
          alt="Preis Trend Chart"
          src={`http://localhost:3000/api/trendImage?range=${range}&productId=${productId}&isCompact=true`}
        />
      )}
      <div className="canvas-wrapper">
        {clientLoaded && (
          <Line
            ref={chartRef}
            options={options}
            data={chartData}
            /* plugins={[getMouselinePlugin()]} */
            id={'trend_details_box'}
          />
        )}
      </div>
    </div>
  );
}
