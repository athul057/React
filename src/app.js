import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

// Lazy loading for the About component
const About = lazy(() => import('./components/About'));

const AppLayout = () => {



  const [userName, setUserName] = useState();

  useEffect(() => {
    // Setting user data on mount
    console.log("first");
    const data = { name: 'athul' };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ logInUser: "athul", setUserName }}>
        <div className='app'>

          <Header />

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

  );
};

// Defining routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/ressingle/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

// Rendering the main app
const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(<RouterProvider router={appRouter} />);
