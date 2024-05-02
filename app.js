import React from 'react';
import ReactDOM from 'react-dom/client'


//HEADER
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/011/405/724/small/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg' alt='logo' />
      </div>

      <div className='nav-links'>
        <ul className='list'>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

//CARD
const Card = (props) => {
  return (
    <div className='card'>
      <div className='res-img'>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/27/424612a9-ba77-4cde-8718-a120fe48d761_64240.jpg' alt='image' />
      </div>
      <h1 className='name'>{props.resName}</h1>
      <div className='container'>
        <h3 className='rating'>{props.rating}</h3>
        <h4 className='time'>{props.time} mins</h4>
      </div>

      <h4 className='items'>South Indian, Kerala, Biryani
        Thopumpady</h4>
    </div>
  )
}


//BODY
const Body = () => {
  return <div className='body'>
    <Card resName="Salkara Grills" rating="4.3" time="40-43" />
    <Card resName="KFC" rating="4.0" time="55-60" />
  </div>
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


