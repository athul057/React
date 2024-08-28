
import { useState } from 'react';

//CARD
const Card = (props) => {
 console.log("props are ", props);
 const { rest } = props;

 return (



  rest.map((item) => {


   const { info } = item;
   return <div className='card' key={info.id}>
    <div className='res-img'>
     <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + info.cloudinaryImageId} alt='image' />
    </div>
    <h2 className='name'>{info.name}</h2>
    <div className='container'>
     <h3 className='rating'>{info.avgRating} stars</h3>
     <h4 className='time'>{props.time} mins</h4>
    </div>
    <div className='items-container'>
     {
      info.cuisines.map((spanItem, index) => {
       return (<span className='items' key={index}>{spanItem}{index < info.cuisines.length - 1 ? "," : ""}</span>)
      })
     }
    </div>


   </div>

  })



 )
}

export default Card;