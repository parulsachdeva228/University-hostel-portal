import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import './index.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import HostelAPage from './pages/HostelAPage'
import HostelBPage from './pages/HostelBPage'
import HostelCPage from './pages/HostelCPage'
import HostelDPage from './pages/HostelDPage'
import MotherTeresaPage from './pages/MotherTeresaPage'
import KalpanaChawlaPage from './pages/KalpanaChawlaPage'

// router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'info',
        element: <InfoPage />
      },
      {
        path: 'hostel-a',
        element: <HostelAPage />
      },
      {
        path: 'hostel-b',
        element: <HostelBPage />
      },
      {
        path: 'hostel-c',
        element: <HostelCPage />
      },
      {
        path: 'hostel-d',
        element: <HostelDPage />
      },
      {
        path: 'mother-teresa',
        element: <MotherTeresaPage />
      },
      {
        path: 'kalpana-chawla',
        element: <KalpanaChawlaPage />
      },
      // {
      //   path: '*',
      //   element: <div className="p-10 text-center"><h2 className="text-2xl">Page Not Found</h2></div>
      // }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
