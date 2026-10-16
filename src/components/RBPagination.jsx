import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function RBPagination() {
  const [activePage, setActivePage] = useState(1);

  const totalPages = 5; // Total number of pages

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <div className="p-4">

      <h2 className="mt-4">Pagination</h2>

      <hr style={{ width: "420px" }} />

      <h6 className="mt-3">
        Active Page : {activePage}
      </h6>

      <Pagination className="mt-3">

        {/* First */}
        <Pagination.First
          disabled={activePage === 1}
          onClick={() => goToPage(1)}
        />

        {/* Previous */}
        <Pagination.Prev
          disabled={activePage === 1}
          onClick={() => goToPage(activePage - 1)}
        />

        {/* Dynamic Pages */}
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <Pagination.Item
              key={page}
              active={activePage === page}
              onClick={() => goToPage(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}

        {/* Next */}
        <Pagination.Next
          disabled={activePage === totalPages}
          onClick={() => goToPage(activePage + 1)}
        />

        {/* Last */}
        <Pagination.Last
          disabled={activePage === totalPages}
          onClick={() => goToPage(totalPages)}
        />

      </Pagination>

    </div>
  );
}

export default RBPagination;