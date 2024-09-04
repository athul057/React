import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import { useState } from 'react';
import { useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';


const About = lazy(() => {
  return import('./components/About')
})



const Applayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>),
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/ressingle/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },


])

const main = ReactDOM.createRoot(document.getElementById('root'));
// main.render(<Applayout />);
main.render(<RouterProvider router={appRouter} />);


