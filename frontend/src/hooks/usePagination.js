import { useState } from "react";

const usePagination = (items = [], itemsPerPage = 4) => {

  const [currentPage, setCurrentPage] = useState(1);

  // Ensure items is always an array
  const safeItems = Array.isArray(items)
    ? items
    : [];

  const totalPages = Math.ceil(
    safeItems.length / itemsPerPage
  );

  const currentItems = safeItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
};

export default usePagination;