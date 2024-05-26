import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Card from './components/Card';
import rest from './utils/mock';
import { useState } from 'react';





//BODY
const Body = () => {
  const [restData, useRestData] = useState(rest)

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


