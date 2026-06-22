import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { activities } from "../assets/data/activity";
import { Calendar, X } from "lucide-react";

const ActivityPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activity = activities.find((item) => item.id === Number(id));

  if (!activity) {
    return <h1>Activity not found</h1>;
  }

  return (
    <div className="bg-white min-h-screen pt-10">
      <div className="max-w-7xl mx-auto bg-[#F8F8F8] rounded-[40px] p-6 lg:p-10">
        <div className="flex justify-end">
          <button onClick={() => navigate(-1)} className="text-primary">
            <X size={35} />
          </button>
        </div>

        <h1 className="font-serif text-4xl lg:text-7xl leading-tight text-primary max-w-3xl">
          {activity.title}
        </h1>

        <div className="flex items-center gap-2 mt-6 text-gray-500">
          <Calendar size={18} />

          {activity.date}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <img
            src={activity.image}
            className="rounded-[30px] w-full h-[350px] object-cover"
          />

          <div className="text-lg leading-relaxed whitespace-pre-line">
            {activity.description}
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-center font-serif text-5xl text-secondary mb-12">
            Gallery
          </h2>

          <div
            className="
flex
gap-6
overflow-x-auto
pb-4
scroll-smooth
"
          >
            {activity.gallery.map((img, index) => (
              <div
                key={index}
                className="
min-w-[280px]
h-[280px]
shrink-0
"
              >
                <img
                  src={img}
                  className="
w-full
h-full
object-cover
rounded-[20px]
"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ActivityPage;
