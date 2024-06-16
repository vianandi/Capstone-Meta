import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-between items-center mt-8">
      <span>Total {totalItems} Items</span>
      <div className="flex items-center">
        <button
          className="px-3 py-1 border"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border ${
              currentPage === index + 1 ? 'bg-gray-200' : ''
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
      <div>
        Go to
        <input
          type="number"
          className="ml-2 border px-2 py-1 w-16"
          value={currentPage}
          onChange={(e) => onPageChange(Number(e.target.value))}
          min={1}
          max={totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
