const loadFirstItems = (currentPage) => {
  return currentPage;
};

const loadLastItems = (currentPage) => {
  return currentPage;
};

const loadNextItems = (currentPage) => {
  return currentPage + 21;
};

const loadPrevItems = (currentPage) => {
  if (currentPage <= 0) return 0;
  return currentPage - 21;
};
export { loadNextItems, loadPrevItems, loadFirstItems, loadLastItems };
