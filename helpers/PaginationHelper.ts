type StepProps = {
  page: number;
  class: string;
  pointsAfter: boolean;
};

export const getStepsFirstPage = (maxPage: number) => {
  const steps: StepProps[] = [];

  const halfWay = Math.floor(maxPage / 2);

  for (let i = 1; i <= maxPage; i++) {
    if (i < 4 || (maxPage >= 10 && i === halfWay) || i === maxPage) {
      steps.push({
        page: i,
        class: i === 1 ? 'active' : '',
        pointsAfter: i > 2 && i < maxPage && maxPage > 4,
      });
    }
  }
  return steps;
};

export const getStepsLastPage = (maxPage: number) => {
  const steps: StepProps[] = [];
  for (let i = 1; i <= maxPage; i++) {
    if (i === 1 || i >= maxPage - 2) {
      steps.push({
        page: i,
        class: i === maxPage ? 'active' : '',
        pointsAfter: i === 1 && maxPage > 4,
      });
    }
  }
  return steps;
};

export const getStepsInbetween = (currentPage: number, maxPage: number) => {
  const steps: StepProps[] = [];
  const possibleSteps = [
    1,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    maxPage,
  ];
  for (let i = 1; i <= maxPage; i++) {
    if (possibleSteps.includes(i)) {
      steps.push({
        page: i,
        class: i === currentPage ? 'active' : '',
        pointsAfter:
          (i === 1 && currentPage > 3) ||
          (i === currentPage + 1 && maxPage > currentPage + 2),
      });
    }
  }
  return steps;
};

export const getPaginationSteps = (currentPage: number, maxPage: number) => {
  if (maxPage <= 1) return [];
  if (currentPage === 1) return getStepsFirstPage(maxPage);
  if (currentPage === maxPage) return getStepsLastPage(maxPage);
  return getStepsInbetween(currentPage, maxPage);
};
