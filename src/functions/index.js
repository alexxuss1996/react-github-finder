export const calculatePaginationPages = (pages) => new Array(Math.ceil(pages)).fill(0).map((_, index) => index + 1);

export const splitPages = (dataArr, currentPage, perPage) => {
  let lastIndexItem = currentPage * perPage;
  let firstIndexItem = lastIndexItem - perPage;
  let pageSlice = dataArr?.slice(firstIndexItem, lastIndexItem);
  let pagesCount = Math.ceil(dataArr?.length / perPage);
  return {
    pageSlice,
    pagesCount,
  };
};
