import { useState } from 'react'
import Home from './Home'
import Details from './Details'
import Order from './Order'

import { Route, RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css'



function App() {
 
  
  const [count, setCount] = useState(0)

  const router = createBrowserRouter ([
    {
      path:"/K3Pizza_Eric/",
      element:<Home />,
      errorElement:<h1>404 Not Found</h1>

    },

    {
      path:"/K3Pizza_Eric/Order/",
      element:<Order/>,
      errorElement:<h1>404 Not Found</h1>
    },

    {
      path:"/K3Pizza_Eric/Details/:id",
      element:<Details/>,
      errorElement: <h1>404 Not Found</h1>
    }


  ])
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
