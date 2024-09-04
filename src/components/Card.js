import React from "react";
// import { myImage } from "../utils/constants";

const Card = (props) => {
 const { info } = props.item;

 return (
  <div className="m-4 p-4 w-[250px] h-[350px] shadow-lg hover:shadow-xl hover:bg-pink-100 transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white rounded-lg" key={info.id}>
   <img
    className="rounded-lg h-[150px] w-full object-cover"
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
    alt="image"
   />
   <div className="mt-2">
    <h2 className="text-lg font-semibold text-gray-800 truncate">{info.name}</h2>
    <div className="flex justify-between items-center mt-1">
     <h3 className="text-sm font-medium text-yellow-600">{info.avgRating} ⭐</h3>
     <h4 className="text-sm text-gray-600">{info.time} Mins</h4>
    </div>
    <div className="text-gray-500 mt-1 truncate">
     {info.cuisines.map((spanItem, index) => (
      <span key={index}>{spanItem}{index < info.cuisines.length - 1 ? ", " : ""}</span>
     ))}
    </div>
   </div>
  </div>
 );
};

export default Card;
