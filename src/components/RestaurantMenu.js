import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { resMenu } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import RestaurantCategory from "./RestaurantCategory";


const ResMenu = () => {

 const { resId } = useParams();
 const resInfo = useResmenu(resId);


 if (resInfo === null) {
  return <Shimmer />
 }
 const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } = resInfo?.cards?.[2]?.card?.card?.info
 const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;

 const catergories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
  return item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
 })


 return (
  <div className="flex items-center justify-center">
   <div className="w-9/12">
    <div className="text-center">
     <h1 className="text-xl font-bold inline">{name}</h1>
     <span className="pl-6 font-bold">({avgRating}⭐) </span>
    </div>

    <div className="flex items-center justify-center">
     <div className="border border-gray-400 rounded my-6 w-4/12 ">
      <div className="flex justify-between">
       <h4 className="font-semibold">{totalRatingsString}</h4>
       <h3 className="pr-6 font-semibold">{costForTwoMessage}</h3>
      </div>
      <h4 className="text-center font-semibold">{cuisines.join(' ')}</h4>
     </div>
    </div>


    <h5 className="text-slate-600 text-center" >Recommended Dishes</h5>
    <hr className="border-t border-gray-300 my-4 w-9/12 mx-auto" />

    {/* Acordians.*/}

    <div className="w-9/12 mx-auto">
     {

      catergories.map((category) => {
       return (
        <RestaurantCategory category={category} />

       )
      })

     }
    </div>

   </div>
  </div>
 )

}

export default ResMenu;








// useEffect(() => {
//  fetchMenu();
// }, [])
// const [resInfo, setResInfo] = useState(null);
// const fetchMenu = async () => {
//  const data = await fetch(resMenu + resId);
//  const myData = await data.json();

//  setResInfo(myData.data);
// }






