import React, { useContext, useEffect, useState, useContext } from 'react';
import Card from './Card';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "./UserContext";


//BODY
const Body = () => {
  const [restData, useRestData] = useState([]);
  const [searchItem, useSearchItem] = useState('');
  const [tempData, useTempData] = useState([]);
  const status = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);



  useEffect(() => {
    console.log("second");
    fetchData();
  }, [])
  const fetchData = async () => {


    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.1141006&lng=76.3991771&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');


    const myData = await data.json();



    //OPTIONAL CHAINING......
    useRestData(myData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    useTempData(myData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


  }

  if (status === false) {
    return <h1>You are offline....</h1>
  }




  return (<div className='mt-10'>
    <div className='m-10 flex'>
      <button className="bg-pink-100 px-3 text-base font-medium rounded-md hover:bg-pink-200" onClick={() => {
        const myData = restData.filter((data) => {
          return (
            data.info.avgRating > 4.4
          )
        })
        useTempData(myData);
      }} >Top Hotels</button>
      <input className='border border-pink-200 ml-8 hover:border-pink-400' type='text' value={searchItem} onChange={(e) => useSearchItem(e.target.value)} />

      <button className='ml-4 bg-pink-300 px-6 text-base font-medium rounded-md hover:bg-pink-400' onClick={() => {
        //INPUT FIELD FOR CHANGING THE USER NAME............................................................................

        <input type='text' value={login} />

        const filteredRes = restData.filter((data) => {
          return data.info.name.toLowerCase().includes(searchItem.toLowerCase())
        })
        useTempData(filteredRes);

      }}>Search</button>
    </div>

    {

      (!restData || restData.length === 0) ? (<div className='m-6 flex flex-wrap'><Shimmer /> </div>) : (<div className='m-6 flex flex-wrap'>
        {
          tempData.map((data) => {
            return (<Link to={"/ressingle/" + data.info.id} key={data.info.id}>
              <Card item={data} />
            </Link>
            )
          })
        }
      </div>)
    }
  </div>
  )



}


export default Body;