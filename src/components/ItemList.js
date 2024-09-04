const ItemList = ({ itemCards }) => {

 return (


  itemCards.map((item, id) => {
   const { name, price, ratings, imageId, description } = item.card.info;
   return (<div className="py-4">
    <div className="pt-3">
     <div className="flex justify-between">
      <div className="w-6/12">
       <div className="flex justify-between">
        <h1 className="font-medium">{name}</h1>
        <h1 className="font-medium">${price / 100}</h1>
       </div>

       <h1 className="pt-2">⭐{ratings.aggregatedRating.rating} </h1>
       <div className="text-slate-500 pt-3">{description}</div>
      </div>
      <div className="relative w-3/12 ">
       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} className="rounded-lg object-cover" alt="img" />
       <button className="absolute self-center bottom-0 right-1/3 text-green-700 bg-gray-100 px-4 py-1 rounded-lg text-center hover:bg-gray-200">Add +</button>
      </div>
     </div >

    </div>
    {id != itemCards.length - 1 ? <hr className="border-t border-gray-300 my-4 w-11/12 mx-auto" /> : ""}
   </div>

   )
  })
 )
}



export default ItemList;