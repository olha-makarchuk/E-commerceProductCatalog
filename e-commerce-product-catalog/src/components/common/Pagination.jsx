function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    const start = Math.max(currentPage - 2, 1);
    const end = Math.min(currentPage + 2, totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <button
        disabled={Number(currentPage) === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`
      px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200
      ${
        Number(currentPage) === 1
          ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
          : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
      }
    `}
      >
        <span className="text-lg leading-none">←</span>
      </button>

      {getPages().map((page) => {
        const isActive = Number(page) === Number(currentPage);
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
          px-4 py-2 text-sm font-bold rounded-lg border transition-all duration-200
          ${
            isActive
              ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100 scale-105"
              : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600"
          }
        `}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={Number(currentPage) === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`
      px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200
      ${
        Number(currentPage) === totalPages
          ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
          : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
      }
    `}
      >
        <span className="text-lg leading-none">→</span>
      </button>
    </div>
  );
}

export default Pagination;
