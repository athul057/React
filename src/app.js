import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Card from './components/Card';
import rest from './utils/mock';
import { useState } from 'react';





//BODY
const Body = () => {
  const [restData, useRestData] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const myData = await data.json();
    console.log(myData);
    useRestData(myData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return (<>
    <button onClick={() => {
      const myData = restData.filter((data) => {
        return (
          data.info.avgRating > 4.3
        )
      })
      console.log(myData)
      useRestData(myData)
    }}>Top Hotels</button>
    <div className='body'>
      <Card rest={restData} />
    </div>
  </>
  )


}


const Applayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(<Applayout />);


