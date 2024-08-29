import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Card from './components/Card';
import Shimmer from './components/Shimmer'
import rest from './utils/mock';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';



//BODY
// const Body = () => {
//  const [restData, useRestData] = useState([]);
//  const [searchItem, useSearchItem] = useState('');
//  const [tempData, useTempData] = useState([]);
//  useEffect(() => {
//   fetchData();
//  }, [])

//  const fetchData = async () => {
//   const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//   const myData = await data.json();

//   //OPTIONAL CHAINING......
//   useRestData(myData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//  }

//  if (restData.length === 0) {
//   return <Shimmer />
//  }



//  return (<>
//   <button className='filterBtn' onClick={() => {
//    const myData = restData.filter((data) => {
//     return (
//      data.info.avgRating > 4.3
//     )
//    })
//    console.log(myData)
//    useRestData(myData)
//   }}>Top Hotelss..</button>
//   <input className='searchInput' type='text' value={searchItem} onChange={(e) => useSearchItem(e.target.value)} />
//   <button onClick={() => {

//    const filteredRes = restData.filter((data) => {
//     return data.info.name.includes(searchItem)
//    })

//    useTempData(filteredRes);
//   }}>Search</button>
//   <div className='body'>
//    <Card rest={tempData} />
//   </div>
//  </>
//  )
// }


const Applayout = () => {
 return (
  <div className='app'>
   <Header />
   <Body />
  </div>
 )
}


const appRouter = createBrowserRouter([
 {
  path: "/",
  element: <Applayout />,
 },
 {
  path: "/about",
  element: <About />,
 },
]);




const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(<Applayout />);


