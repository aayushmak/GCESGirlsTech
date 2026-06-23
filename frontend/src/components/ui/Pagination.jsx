import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 my-20">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage((prev) => prev - 1)
        }
        className="w-12 h-12 rounded-full border border-primary flex items-center justify-center"
      >
        <ChevronLeft size={18} />
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() =>
            setCurrentPage(i + 1)
          }
          className={`w-12 h-12 rounded-full border 
          ${
            currentPage === i + 1
              ? "bg-primary text-white"
              : "border-primary"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage((prev) => prev + 1)
        }
        className="w-12 h-12 rounded-full border border-primary flex items-center justify-center"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Pagination;