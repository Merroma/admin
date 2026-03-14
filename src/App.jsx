import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './config/routes'

function App() {

  const route = createBrowserRouter(routes)

  return (
    <RouterProvider router={route}/>
  )
}

export default App
