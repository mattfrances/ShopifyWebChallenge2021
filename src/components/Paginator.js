import React from 'react';

const Paginator = ({ totalResults, currentPage, handlePageChange }) => {
  const maxNumberOfPages =
    totalResults <= 10 ? 1 : Math.floor(totalResults / 10);

  const goToPage = (pageNumber) => {
    handlePageChange(pageNumber);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 dark:bg-gray-800 dark:border-gray-900">
      <div className="flex-1 flex justify-between">
        <button
          disabled={currentPage - 1 === 0}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none disabled:opacity-30 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>
        <p className="m-auto text-gray-700 dark:text-gray-300">{`Page ${currentPage} of ${maxNumberOfPages}`}</p>
        <button
          disabled={currentPage === maxNumberOfPages}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none disabled:opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginator;
