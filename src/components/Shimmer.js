import React from "react";
import './Shimmer.css'; // Import the CSS file with the shimmer animation

const Shimmer = () => {
 return (
  <div className="flex flex-wrap gap-4 p-4">
   {Array.from({ length: 5 }).map((_, index) => (
    <div
     key={index}
     className="m-4 p-4 w-[250px] h-[350px] bg-white rounded-lg shadow-lg"
    >
     <div className="h-[150px] w-full bg-gray-200 rounded-lg shimmer"></div>
     <div className="mt-4 space-y-2">
      <div className="h-6 w-full bg-gray-200 rounded-lg shimmer"></div>
      <div className="h-4 w-2/3 bg-gray-200 rounded-lg shimmer"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded-lg shimmer"></div>
     </div>
    </div>
   ))}
  </div>
 );
};

export default Shimmer;
