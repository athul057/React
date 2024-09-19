

import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../src/utils/cartSlice";

const Cart = () => {

 const items = useSelector((data) => data.cart.items);
 console.log(items);

 // const newItem=[];

 // newItem=items.filter((item)=>{
 //  if(newItem.find(item.info.id))
 // })
 const dispatch = useDispatch();

 const handleClick = () => {
  dispatch(clearItem());
 }


 return (
  <div className="text-center font-bold py-4">
   <button className="border-2 rounded-md bg-stone-200 p-3 hover:bg-stone-300" onClick={handleClick}>Clear Cart</button>



   {items.length === 0 ? (<h1 className="text-center font-bold">Your cart is empty....</h1>) :
    items.map((item, id) => {
     const { name, price, ratings, imageId } = item.card.info;
     return (
      <div className="py-4" key={id}>

       <div className="w-8/12 mx-auto border-2 p-2">

        <div className="flex justify-between items-center">
         <div className="w-5/12">
          <div className="flex justify-between">
           <h1 className="font-medium">{name}</h1>
           <h1 className="font-medium">${price / 100}</h1>
          </div>

          <h1 className="pt-2">⭐{ratings.aggregatedRating.rating} </h1>
         </div>


         <div className="w-2/12 flex justify-center items-center">
          <img
           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
           className="rounded-lg object-cover h-40 w-full"
           alt="img"
          />
         </div>
        </div>
       </div>
      </div>
     );
    })
   }
  </div>
 );
};

export default Cart;
