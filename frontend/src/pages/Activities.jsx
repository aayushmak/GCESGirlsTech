import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ActivityCard from "../components/ui/ActivityCard";
import Pagination from "../components/ui/Pagination";
import usePagination from "../hooks/usePagination";
import { activities } from "../assets/data/activity";

const Activities = () => {
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(activities, 3);

  return (
    <div className="bg-white min-h-screen pt-24 ">
      {/* Fixed Navbar Spacer */}
      <div className="absolute top-0 left-0 w-full bg-white h-24 z-40 flex items-center shadow-sm">
        <Navbar />
      </div>
      <div className="text-center mt-24">
        <h1 className="font-serif text-5xl lg:text-7xl">
          Our
          <span className="italic text-secondary"> Activities</span>
        </h1>

        <p className="text-gray-500 mt-5">From workshops to events...</p>
      </div>

      <div className="mx-6 lg:mx-16 mt-16 space-y-10 ">
        {currentItems.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Activities;
