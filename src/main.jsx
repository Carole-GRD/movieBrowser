import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Routing : Imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { route } from './routes/route.jsx'

// Routing : Création du router
const router = createBrowserRouter(route)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
