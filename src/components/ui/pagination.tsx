import React from "react";

interface PaginationProps {
  currentPage: number;
  total: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  total,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= totalPages &&
      pageNumber !== currentPage
    ) {
      onPageChange(pageNumber);
    }
  };

  // Function to render page numbers
  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    pages.push(
      <button
        key={1}
        onClick={() => handlePageClick(1)}
        className={`
          px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300
          ${
            currentPage === 1
              ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg transform hover:-translate-y-0.5"
              : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
          }
          focus:outline-none
        `}
        aria-current={currentPage === 1 ? "page" : undefined}
        disabled={currentPage === 1} // Disable if it's the current page
      >
        1
      </button>
    );

    if (totalPages > maxPagesToShow) {
      const startPage = Math.max(
        2,
        currentPage - Math.floor((maxPagesToShow - 3) / 2)
      );
      const endPage = Math.min(
        totalPages - 1,
        currentPage + Math.ceil((maxPagesToShow - 3) / 2)
      );

      if (startPage > 2) {
        pages.push(
          <span
            key="dots-start"
            className="px-4 py-2 text-sm font-medium text-gray-600 select-none"
          >
            ...
          </span>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`
              px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300
              ${
                currentPage === i
                  ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg transform hover:-translate-y-0.5"
                  : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              }
              focus:outline-none
            `}
            aria-current={currentPage === i ? "page" : undefined}
            disabled={currentPage === i} // Disable if it's the current page
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages - 1) {
        pages.push(
          <span
            key="dots-end"
            className="px-4 py-2 text-sm font-medium text-gray-600 select-none"
          >
            ...
          </span>
        );
      }
    } else {
      for (let i = 2; i < totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`
              px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300
              ${
                currentPage === i
                  ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg transform hover:-translate-y-0.5"
                  : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              }
              focus:outline-none
            `}
            aria-current={currentPage === i ? "page" : undefined}
            disabled={currentPage === i} // Disable if it's the current page
          >
            {i}
          </button>
        );
      }
    }

    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`
            px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300
            ${
              currentPage === totalPages
                ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg transform hover:-translate-y-0.5"
                : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
            }
            focus:outline-none
          `}
          aria-current={currentPage === totalPages ? "page" : undefined}
          disabled={currentPage === totalPages} // Disable if it's the current page
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="  ">
      <nav
        className="flex items-center justify-center space-x-2 p-4 rounded-lg  "
        aria-label="Pagination"
      >
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className={`
            inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 focus:outline-none
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
          `}
          disabled={currentPage === 1}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Trước
        </button>

        <div className="flex space-x-2">{renderPageNumbers()}</div>

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className={`
            inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 focus:outline-none
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}
          `}
          disabled={currentPage === totalPages}
        >
          Sau
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
