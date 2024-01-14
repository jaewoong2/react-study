import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MyThemeProvider from './theme/ThemeProvider'
import Home from './pages/Home'

const ToodList = React.lazy(() => import('./pages/ToodList'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todoList',
    element: <ToodList />,
    children: [{ path: ':id' }],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <MyThemeProvider>
        <RouterProvider router={router} />
      </MyThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
