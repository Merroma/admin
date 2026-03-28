import React from "react"
import "./index.css"   
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./config/routes.jsx"
import './i18n'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)