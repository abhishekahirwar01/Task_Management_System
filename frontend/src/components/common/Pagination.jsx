const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => changePage(idx + 1)}
        className={`px-3 py-1 mx-1 rounded ${
          page === idx + 1
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <button
            key={startValue + idx + 1}
            onClick={() => changePage(startValue + idx + 1)}
            className={`px-3 py-1 mx-1 rounded ${
              page === startValue + idx + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {startValue + idx + 1}
          </button>
        ))}
        <button className="px-3 py-1 mx-1">...</button>
        <button
          onClick={() => changePage(pages)}
          className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          {pages}
        </button>
      </>
    );

    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <button
              onClick={() => changePage(1)}
              className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              1
            </button>
            <button className="px-3 py-1 mx-1">...</button>
            <button
              onClick={() => changePage(startValue)}
              className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              {startValue}
            </button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  page === startValue + idx + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {startValue + idx + 1}
              </button>
            ))}
            <button className="px-3 py-1 mx-1">...</button>
            <button
              onClick={() => changePage(pages)}
              className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              {pages}
            </button>
          </>
        );
      } else {
        middlePagination = (
          <>
            <button
              onClick={() => changePage(1)}
              className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              1
            </button>
            <button className="px-3 py-1 mx-1">...</button>
            <button
              onClick={() => changePage(startValue)}
              className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              {startValue}
            </button>
            {[...Array(pages - startValue + 1)].map((_, idx) => (
              <button
                key={startValue + idx}
                onClick={() => changePage(startValue + idx)}
                className={`px-3 py-1 mx-1 rounded ${
                  page === startValue + idx
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {startValue + idx}
              </button>
            ))}
          </>
        );
      }
    }
  }

  return (
    pages > 1 && (
      <div className="flex justify-center mt-6">
        <button
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          &laquo;
        </button>
        {middlePagination}
        <button
          onClick={() => changePage(page + 1)}
          disabled={page === pages}
          className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          &raquo;
        </button>
      </div>
    )
  );
};

export default Pagination;
