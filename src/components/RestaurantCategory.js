import { useState } from "react";
import ItemList from "./ItemList";




const RestaurantCategory = ({ category, setShowItems, listMake }) => {


 const [showFull, setShowFull] = useState(false);
 const hadnleClick = () => {
  setShowItems();
  setShowFull(!showFull);
 }


 const { title, itemCards } = category.card.card


 return (<div>
  <div className="w-full mx-auto shadow-lg bg-zinc-100 my-4 p-2">
   <div className="flex justify-between cursor-pointer" onClick={hadnleClick}>
    <h1 className="text-lg font-semibold">{title} ({category.card.card.itemCards.length})</h1><span>🔽</span>
   </div>

   {showFull && listMake && <ItemList itemCards={itemCards} />}


  </div>

 </div>)

}

export default RestaurantCategory;