import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ActivityCard = ({
id,
image,
title,
shortDescription,
date,
location
}) => {

return(

<Link to={`/activities/${id}`}>

<div className="border border-primary rounded-[30px] p-5 m-8 hover:shadow-lg transition-all cursor-pointer">

<div className="flex flex-col lg:flex-row gap-8">

<img
src={image}
className="w-full lg:w-[350px] h-[250px] rounded-3xl object-cover"
/>

<div>

<h2 className="font-serif text-3xl lg:text-5xl text-primary">
{title}
</h2>

<p className="mt-5 text-gray-500">
{shortDescription}
</p>

<div className="flex flex-wrap gap-8 mt-6 text-secondary">

<div className="flex gap-2 items-center">
<Calendar size={18}/>
{date}
</div>

<div className="flex gap-2 items-center">
<MapPin size={18}/>
{location}
</div>

</div>

</div>

</div>

</div>

</Link>

);

};

export default ActivityCard;