import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Error from './components/Error.jsx'
import AddBooks from './components/AddBooks.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import Home from './components/Home.jsx'
import App from './App.jsx'
import PopularBooks from './components/PopularBooks.jsx'
import BookCategory from './components/BookCategory.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'


const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<Home/>,
      },
      {
        path: '/AddBooks',
        element:<AddBooks/>,
      },
      {
        path: '/BrowseBooks',
        element:<BrowseBooks/>,
      },
      {
        path: '/BrowseBooks/:category',
        element:<BookCategory/>
      },
      {
        path: '/PopularBooks',
        element:<PopularBooks/>
      }
      
    ]
    
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
