import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { router } from './routes/router'
import './global.scss'

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
