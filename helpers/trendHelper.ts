import { Chart as ChartJS, ChartData } from 'chart.js';
import { de } from 'date-fns/locale';
import 'chartjs-adapter-date-fns';
import { ProductPriceHistory } from '@graphql/generated/client';
import { ChartOptions } from 'chart.js/dist/types';

const color_blue_light_5 = '#2f5878';
const bgColor_middleblue = 'rgba(229,235,239,0.8)';
const color_grey_light_10 = '#878787';
const color_grey_light_20 = '#AAA';
const color_grey_light_30 = '#CCC';
const color_grey = '#646464';

export function getChartOptions(
  data: (ProductPriceHistory | null)[]
): ChartOptions<'line'> {
  // null pointer checks are required, since api is can respond with optional values
  const yPriceData = data
    .map((obj) => {
      return obj?.price?.price;
    })
    .filter((item): item is number => !!item);
  const yAvgData = data
    .map((obj) => {
      return obj?.average?.price;
    })
    .filter((item): item is number => !!item);
  const maxYValue = getMaxYValue(yAvgData);
  const maxYAxisValue = maxYValue * 1.01;
  const minYAxisValue = getMinYAxisValue(yPriceData, maxYValue);

  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    locale: 'de-DE',
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        beginAtZero: false,
        position: 'left',
        suggestedMin: minYAxisValue,
        suggestedMax: maxYAxisValue,
        grid: getYAxisGrid(),
        ticks: {
          maxTicksLimit: 10,
          count: 10,
          padding: 10,
          color: color_grey_light_10,
          callback: function (value) {
            if (typeof value === 'string') {
              return Math.round(parseInt(value)) + ' €';
            }
            return Math.round(value) + ' €';
          },
        },
      },
      x: {
        type: 'time',
        time: {
          unit: 'month',
          tooltipFormat: 'dd.MM.yy',
          displayFormats: {
            month: 'dd.MM.yy',
          },
        },
        adapters: {
          date: {
            locale: de,
          },
        },
        ticks: {
          minRotation: 50,
        },
        grid: getXAxisGrid(),
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'end',
        maxWidth: 200,
        labels: {
          usePointStyle: true,
        },
      },
    },
  };
}

export function getCompactChartOptions(
  data: (ProductPriceHistory | null)[]
): ChartOptions<'line'> {
  const yData = data
    .map((obj) => {
      return obj?.price?.price;
    })
    .filter((item): item is number => !!item);

  const maxYValue = getMaxYValue(yData);
  const maxYAxisValue = maxYValue * 1.01;
  const minYAxisValue = getMinYAxisValue(yData, maxYValue);

  return {
    responsive: true,
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        beginAtZero: false,
        position: 'right',
        suggestedMin: minYAxisValue,
        suggestedMax: maxYAxisValue,
        grid: getYAxisGrid(),
        ticks: {
          maxTicksLimit: 3,
          count: 3,
          padding: 10,
          color: color_grey_light_10,
          callback: function (value) {
            return value + ' €';
          },
        },
      },
      x: {
        display: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    plugins: {
      tooltip: {
        intersect: false,
        mode: 'nearest',
        backgroundColor: color_blue_light_5,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          label: function (context: { raw: number | bigint }) {
            return new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(context.raw);
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };
}

interface ChartDataType {
  labels: string[] | Date[];
  datasets: {
    label?: string;
    backgroundColor?: string;
    borderColor: string;
    fill: boolean;
    pointRadius: number;
    pointBackgroundColor?: string;
    pointBorderColor?: string;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    lineTension: number;
    borderWidth: number;
    pointHoverRadius: number;
    data: number[];
  }[];
}

export function getChartData(
  data: (ProductPriceHistory | null)[]
): ChartData<'line'> {
  const labels = data
    .map((obj) => {
      if (!obj?.date) {
        return null;
      }
      return new Date(obj.date);
    })
    .filter((item): item is Date => !!item);

  const yPriceData = data
    .map((obj) => {
      return obj?.price?.price;
    })
    .filter((item): item is number => !!item);
  const yAvgData = data
    .map((obj) => {
      return obj?.average?.price;
    })
    .filter((item): item is number => !!item);

  return {
    labels: labels,
    datasets: [
      {
        label: ' Bester Preis',
        backgroundColor: bgColor_middleblue,
        borderColor: color_blue_light_5,
        fill: true,
        pointRadius: 0,
        pointHoverBackgroundColor: color_blue_light_5,
        pointHoverBorderColor: color_blue_light_5,
        borderWidth: 1,
        pointHoverRadius: 6,
        data: yPriceData,
      },
      {
        label: ' Durchschnittspreis',
        data: yAvgData,
        pointRadius: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: color_grey,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: color_grey,
        fill: false,
        borderColor: color_grey_light_20,
        borderWidth: 1,
        pointHoverRadius: 6,
      },
    ],
  };
}

export function getCompactChartData(
  data: (ProductPriceHistory | null)[]
): ChartDataType {
  const labels = data
    .map((obj) => {
      return obj?.label;
    })
    .filter((item): item is string => !!item);
  const yData = data
    .map((obj) => {
      return obj?.price?.price;
    })
    .filter((item): item is number => !!item);
  return {
    labels: labels,
    datasets: [
      {
        backgroundColor: bgColor_middleblue,
        borderColor: color_blue_light_5,
        fill: true,
        pointRadius: 0,
        pointHoverBackgroundColor: color_blue_light_5,
        pointHoverBorderColor: color_blue_light_5,
        lineTension: 0,
        borderWidth: 1,
        pointHoverRadius: 5,
        data: yData,
      },
    ],
  };
}

function getMaxYValue(yData: number[]): number {
  return Math.max(
    ...yData.map(function (value) {
      return value;
    })
  );
}

function getMinYAxisValue(yData: number[], maxYValue: number) {
  const minYValue = getMinYValue(yData);

  const minYAxisValue = Math.max(
      0,
      Math.floor(minYValue - deltaY(minYValue, maxYValue) / 1.5)
    ),
    d = (function (e) {
      return Math.ceil(maxYValue + deltaY(minYValue, maxYValue) / 2);
    })(yData);

  return minYAxisValue;
}

function getMinYValue(yData: number[]) {
  return Math.min(
    ...yData.map(function (value) {
      return value;
    })
  );
}

function deltaY(minYValue: number, maxYValue: number) {
  return Math.max(1, maxYValue - minYValue);
}

function getYAxisGrid() {
  return {
    borderColor: 'rgba(0, 0, 0, 0)',
    borderDash: [2, 2],
    color: color_grey_light_30,
    zeroLineWidth: 0,
    zeroLineColor: 'rgba(0, 0, 0, 0)',
    zeroLineBorderDash: [0, 0],
    drawTicks: false,
    beginAtZero: true,
    borderWidth: 0,
  };
}

function getXAxisGrid() {
  return {
    borderColor: 'rgba(0, 0, 0, 0)',
    borderDash: [2, 2],
    color: color_grey_light_30,
    offset: false,
    tickBorderDashOffset: 100,
  };
}
/*
// Funktioniert noch nicht mit typescript
export function getMouselinePlugin() {
  return {
    id: 'mouseLine',
    afterEvent: (chart: ChartType, args: any, options: any) => {
      let chartArea = chart.chartArea;
      if (
        args.event.x >= chartArea.left &&
        args.event.y >= chartArea.top &&
        args.event.x <= chartArea.right &&
        args.event.y <= chartArea.bottom &&
        chart.getActiveElements().length
      ) {
        const activeElm = chart.getActiveElements()[0];
        options.mouseLine.x = activeElm['element'].x;
      } else {
        options.mouseLine.x = NaN;
      }
    },
    beforeDraw: (chart: ChartType, args: [], options: any) => {
      const { ctx, chartArea } = chart;
      console.log(ctx);
      const x = options.mouseLine.x;

      if (!isNaN(x)) {
        ctx.save();
        ctx.strokeStyle = options.mouseLine.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.moveTo(options.mouseLine.x, chartArea.bottom + 10);
        ctx.lineTo(options.mouseLine.x, chartArea.top);
        ctx.stroke();
        ctx.restore();
      }
    },
    defaults: {
      color: color_grey_light_40,
    },
  };
}
*/
interface ChartContext {
  chart: ChartJS;
  tooltip: any;
}

const externalTooltipHandler = (context: ChartContext) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart.canvas);
  const hoverDateEl = getOrCreateHoverDate(chart);
  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  if (!tooltipEl || !hoverDateEl) {
    return;
  }

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = '0';
    hoverDateEl.style.opacity = '0';
    return;
  }

  //show date in axis when hovering
  hoverDateEl.innerHTML = tooltip.dataPoints[0].label;
  hoverDateEl.style.opacity = '1';
  hoverDateEl.style.left = positionX + tooltip.caretX - 45 + 'px';
  hoverDateEl.style.top = chart.scales.x.top + 20 + 'px';

  // Set Text
  if (tooltip.body) {
    const tableBody = document.createElement('tbody');
    tooltip.dataPoints.forEach((point: any, i: number) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement('span');
      span.classList.add(
        'legend',
        'hidden',
        'md:inline-block',
        'md-border-2',
        'md:mr-1',
        'md-h-2',
        'md-w-2'
      );
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      const tr = document.createElement('tr');
      if (i == 0) {
        tr.classList.add('highlight', 'h-[25px]', 'text-sm', 'font-bold');
      } else {
        tr.classList.add('h-[17px]', 'text-xs');
      }

      const td = document.createElement('td');
      const value = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(point.raw);
      const text = document.createTextNode(point.dataset.label + ': ' + value);

      td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);

      // for mobile show only best price value
      if (window.screen.width >= 500 || i == 0) {
        tableBody.appendChild(tr);
      }
    });

    const tableRoot = tooltipEl.querySelector('table') as Element;

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }
    tableRoot.appendChild(tableBody);
  }

  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1';

  if (window.screen.width < 500) {
    tooltipEl.style.top =
      positionY + tooltip.dataPoints[0].element.y - 15 + 'px';
    tooltipEl.style.left =
      tooltip.xAlign === 'left'
        ? positionX + tooltip.caretX + 100 + 'px'
        : positionX + tooltip.caretX - 100 + 'px';
  } else {
    tooltipEl.style.top = positionY + tooltip.caretY - 20 + 'px';
    tooltipEl.style.left =
      tooltip.xAlign === 'left'
        ? positionX + tooltip.caretX + 115 + 'px'
        : positionX + tooltip.caretX - 115 + 'px';
  }
};

const getOrCreateTooltip = (
  canvas: HTMLCanvasElement
): HTMLDivElement | null => {
  if (!canvas.parentNode) {
    return null;
  }
  let tooltipEl =
    canvas.parentNode.querySelector<HTMLDivElement>('.trend-ttip');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div') as HTMLDivElement;
    tooltipEl.classList.add(
      'trend-ttip',
      'min-w-[170px]',
      'text-white',
      'bg-blue-light-5',
      'pointer-events-none',
      'absolute',
      '-translate-x-2/4',
      'translate-y-0',
      'transition-all',
      'duration-[0.1s]',
      'ease-[ease]',
      'delay-[0s]',
      'text-xs',
      'z-1',
      'p-2',
      'rounded-[3px]',
      'md:min-w-[200px]',
      'md:text-sm',
      'md:p-2'
    );
    tooltipEl.style.opacity = '1';

    const table = document.createElement('table');

    tooltipEl.appendChild(table);
    canvas.parentNode.appendChild(tooltipEl);
  }
  return tooltipEl;
};

const getOrCreateHoverDate = (chart: ChartJS): HTMLElement | null => {
  if (!chart.canvas.parentNode) return null;

  let hoverDateEl = chart.canvas.parentNode.querySelector(
    '.trend-hover-date'
  ) as HTMLElement;

  if (!hoverDateEl) {
    hoverDateEl = document.createElement('div') as HTMLElement;
    hoverDateEl.classList.add(
      'trend-hover-date',
      'text-pink',
      'absolute',
      'bottom-0',
      'bg-white',
      'flex',
      'leading-none',
      'font-bold',
      'h-8',
      'items-center',
      'justify-center',
      '-rotate-45'
    );
    hoverDateEl.style.opacity = '1';
    chart.canvas.parentNode.appendChild(hoverDateEl);
  }
  return hoverDateEl;
};
