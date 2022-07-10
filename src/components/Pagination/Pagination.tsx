/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import './Pagination.scss';

type Props = {
  component: Team | Player;
  perPage: number;
  currentPage: number;
  setPerPage: (perPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
};

export const Pagination: React.FC<Props> = ({
  component,
  perPage,
  currentPage,
  setPerPage,
  setCurrentPage,
}) => {
  const total_pages = [];
  let total_per_pages = [];

  if (perPage % 8 === 0) {
    total_per_pages = [8, 16];
  } else {
    total_per_pages = [10, 20, 30];
  }

  for (let i = 1; i <= component.meta.total_pages; i++) {
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
          {total_per_pages.map(per_page => (
            <option value={per_page} key={per_page}>{per_page}</option>
          ))}
        </select>
        <label
          htmlFor="per_page"
        >
          {component
            && `Displaying ${(currentPage - 1) * perPage + 1}-${(currentPage - 1) * perPage + component?.data.length} of ${component?.meta.total_count} items`}
        </label>
      </span>

      <span className="pages">
        <label
          htmlFor="pages"
        >
          {`${currentPage} of ${component?.meta.total_pages} pages`}
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
          disabled={component?.meta.next_page === null}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </span>
    </div>
  );
};
