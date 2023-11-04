import { useRef } from 'react';

import { getChartOptions, getChartData } from '@helpers/trendHelper';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  TimeScale,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  selectPriceTrendHistory,
  selectPriceTrendRange,
  selectPriceTrendRangeButtonConfig,
} from '@store/server/TrendDataSlice';
import { selectProductId } from '@store/server/ProductSlice';

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  TimeScale,
  CategoryScale,
  Legend,
  Tooltip
);

export default function Trend() {
  const rangeButtons = useSelector(selectPriceTrendRangeButtonConfig);
  const range = useSelector(selectPriceTrendRange);
  const rawData = useSelector(selectPriceTrendHistory);
  const chartRef = useRef<ChartJS>(null);
  const productId = useSelector(selectProductId);

  if (!rawData) {
    return <>Empty Data</>;
  }
  if (!productId) {
    return <>Empty Product Id</>;
  }
  const options = getChartOptions(rawData);
  const chartData = getChartData(rawData);

  const handleRangeClick = (range: string) => {
    /* This seems to be totally fine for client side
    but at current point we dont have an api for it so we do full reload */
  };

  return (
    <div className="relative mt-5">
      <div className="buttons flex items-start justify-end gap-x-5">
        {/*//TODO: refactor btn-basic*/}
        {rangeButtons.map((button) => (
          <button
            key={button.key}
            className={`btn-basic -small -lightblue trend-btn ${
              button.key === range ? 'active' : ''
            }`}
            onClick={() => handleRangeClick(button.key)}
          >
            {button.value}
          </button>
        ))}
      </div>

      <div className="relative h-[300px] w-full md:h-[400px] md:w-screen md:max-w-full">
        <Line
          ref={chartRef}
          options={options}
          data={chartData}
          /* TODO: plugins={[getMouselinePlugin()]} not working */
          id={'trend_details_box'}
        />
      </div>
      <div className="ml-5 flex items-center text-2xs md:absolute md:bottom-[5px]">
        Alle Angaben ohne Gewähr.
      </div>
    </div>
  );
}
