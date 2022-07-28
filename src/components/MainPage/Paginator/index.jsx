import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  incrementCurrentPage,
  decrementCurrentPage,
} from "../../../store/features/pagination/paginationSlice";
import { calculatePaginationPages } from "../../../functions";
import "./Paginator.scss";

export default function Paginator() {
  const { currentPage, numberOfPages } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const pagePositions = calculatePaginationPages(numberOfPages);

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} className="pagination-prev" onClick={() => dispatch(decrementCurrentPage())}>
        &#8592; Prev
      </button>
      <ul className="pagination-numbers">
        {pagePositions?.map((page, index) => (
          <li
            className={currentPage === page ? "pagination-button active" : "pagination-button"}
            key={index}
            onClick={() => {
              dispatch(setCurrentPage(page));
            }}
          >
            {page}
          </li>
        ))}
      </ul>
      <button
        className="pagination-next"
        disabled={currentPage === pagePositions?.length || pagePositions?.length === 0}
        onClick={() => {
          dispatch(incrementCurrentPage());
        }}
      >
        Next &#8594;
      </button>
    </div>
  );
}
