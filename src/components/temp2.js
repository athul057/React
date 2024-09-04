import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {

 const [show, setShow] = useState(false);

 const { title, itemCards } = category.card.card

 return (<div>
  <div className="w-full mx-auto shadow-lg bg-zinc-100 my-4 p-2">
   <div className="flex justify-between " onClick={() => { setShow(!show) }}>
    <h1 className="text-lg font-semibold">{title} ({category.card.card.itemCards.length})</h1><span>🔽</span>
   </div>
   {
    itemCards.map((item, id) => {
     return (<div>
      <ItemList item={item} />
      {id != itemCards.length - 1 ? <hr className="border-t border-gray-300 my-4 w-11/12 mx-auto" /> : ""}

     </div>)
    })
   }

  </div>

 </div>)

}

export default RestaurantCategory;