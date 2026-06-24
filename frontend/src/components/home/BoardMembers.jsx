import React from "react";
import { Link } from "react-router-dom";
import { team } from "../../assets/data/team";
import TeamMemberCard from "../ui/TeamMemberCard";
import Button from "../ui/Button";
import usePagination from "../../hooks/usePagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BoardMembers=()=>{

const boardMembers=team.filter(
(member)=>member.category==="board"
);

const{
currentItems,
currentPage,
setCurrentPage,
totalPages
}=usePagination(boardMembers,3);

return(

<section className="py-24">

<div className="container mx-auto px-10 max-w-6xl">

{/* top left */}
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-px bg-[#0B1F1E]/50"/>
<span className="text-[#0B1F1E]/70 text-xs tracking-widest font-bold">
MEMBERS
</span>
</div>

<h2 className="text-5xl font-serif mb-12">
Our <span className="text-secondary italic">
Board
</span> Members
</h2>

<div className="grid md:grid-cols-3 gap-8">

{currentItems.map((member)=>(
<TeamMemberCard
key={member.id}
{...member}
/>
))}

</div>

<div className="flex justify-between mt-12">

<Link to="/team">

<Button
variant="accent"
className="rounded-full"
>
See All Members
</Button>

</Link>

<div className="flex gap-3">

<Button
variant="ghost"
className="rounded-full w-10 h-10 p-0"
disabled={currentPage===1}
onClick={()=>
setCurrentPage(prev=>prev-1)
}
>
<ArrowLeft size={16}/>
</Button>

<Button
variant="accent"
className="rounded-full w-10 h-10 p-0"
disabled={currentPage===totalPages}
onClick={()=>
setCurrentPage(prev=>prev+1)
}
>
<ArrowRight size={16}/>
</Button>

</div>

</div>

</div>

</section>

);

};

export default BoardMembers;