import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './Jobs.jsx';
import Applayout from './Applayout.jsx';
import AppContext from 'antd/es/app/context.js';
import AppProvider from './Context/AppProvider.jsx';

const router = createBrowserRouter([
  {
 
   path:"/",
   element: <App/>
  },
  {
    path: "/jobs",
    element: <Jobs/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider>
  <RouterProvider router={router} />
  </AppProvider>

)
