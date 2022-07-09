/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

type Props = {
  teams: Team;
  perPage: number;
  currentPage: number;
  setPerPage: (perPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
};

export const Pagination: React.FC<Props> = ({
  teams,
  perPage,
  currentPage,
  setPerPage,
  setCurrentPage,
}) => {
  const total_pages = [];

  for (let i = 1; i <= teams.meta.total_pages; i++) {
    total_pages[i - 1] = i;
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [perPage]);

  return (
    <div className="displaying_items">
      <span className="per_page">
        <label htmlFor="per_page">
          Items per page
        </label>
        <select
          name="per_page"
          id="per_page"
          className="button"
          value={perPage}
          onChange={(event) => setPerPage(Number(event.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <label
          htmlFor="per_page"
        >
          {teams
              && `Displaying ${(currentPage - 1) * perPage + 1}-${(currentPage - 1) * perPage + teams?.data.length} of ${teams?.meta.total_count} items`}
        </label>
      </span>

      <span className="pages">
        <label
          htmlFor="pages"
        >
          {`${currentPage} of ${teams?.meta.total_pages} pages`}
        </label>

        <input
          type="button"
          value="<"
          className="button_page button_page_left"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />

        <select
          name="pages"
          id="pages"
          className="button"
          value={currentPage}
          onChange={(event) => setCurrentPage(Number(event.target.value))}
        >
          {total_pages.map(page => (
            <option value={page} key={page}>{page}</option>
          ))}
        </select>
        <input
          type="button"
          value=">"
          className="button_page"
          disabled={teams?.meta.next_page === null}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </span>
    </div>
  );
};
