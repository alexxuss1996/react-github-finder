export const calculatePaginationPages = (pages) => new Array(Math.ceil(pages)).fill(0).map((_, index) => index + 1);
