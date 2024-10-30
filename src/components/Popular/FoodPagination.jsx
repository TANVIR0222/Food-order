import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDispatch } from "react-redux";
import { changePageNumber } from "@/app/features/product/productSlice";
const FoodPagination = ({ currentPage, totalPage }) => {
  const dispatch = useDispatch();

  const handlePageChangeNext = (page) => {
    if (Number(page) < Number(totalPage)) {
      dispatch(changePageNumber(page + 1));
    }
  };
  const handlePageChangePrev = (page) => {
    if (Number(page) === 1) {
      alert("murubbi oho oho");
    } else {
      dispatch(changePageNumber(page - 1));
    }
  };

  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChangePrev(currentPage)}
            />
          </PaginationItem>

          <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

          <PaginationItem>
            <PaginationNext onClick={() => handlePageChangeNext(currentPage)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default FoodPagination;
