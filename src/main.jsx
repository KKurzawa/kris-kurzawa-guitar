import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx';
import Shows from '../src/Pages/Shows/Shows.jsx'
import Music from '../src/Pages/Music/Music.jsx'
import Videos from '../src/Pages/Videos/Videos.jsx'
import Gear from '../src/Pages/Gear/Gear.jsx'
import Contact from '../src/Pages/Contact/Contact.jsx'
import Error from '../src/Pages/Error/Error.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Music',
        element: <Music />
      },
      {
        path: '/Videos',
        element: <Videos />
      },
      {
        path: '/Gear',
        element: <Gear />
      },
      {
        path: '/Shows',
        element: <Shows />
      },

      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

