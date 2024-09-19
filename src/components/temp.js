

import { useSelector } from "react-redux";

const Cart = () => {

 const items = useSelector((data) => data.cart.items);
 console.log(items);

 return (
  items.map((item, id) => {
   const { name, price, ratings, imageId, description } = item.card.info;
   return (
    <div className="py-4" key={id}>
     <div className="w-9/12 mx-auto border-2 p-2">
      <div className="flex justify-between items-center">
       <div className="w-9/12">
        <div className="flex justify-between">
         <h1 className="font-medium">{name}</h1>
         <h1 className="font-medium">${price / 100}</h1>
        </div>

        <h1 className="pt-2">⭐{ratings.aggregatedRating.rating} </h1>
        <div className="text-slate-500 pt-3">{description}</div>
       </div>

       {/* Updated image container */}
       <div className="w-3/12 flex justify-center items-center">
        <img
         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
         className="rounded-lg object-cover h-40"
         alt="img"
        />
       </div>
      </div>
     </div>
    </div>
   );
  })
 );
};

export default Cart;
