import { createBrowserRouter } from 'react-router-dom'
import AttractionPage from 'pages/AttractionPage'
import SearchAttraction from 'pages/SearchAttraction'
import MainPage from 'pages/Main'
import ErrorPage from 'pages/Error'
import PlanPage from 'pages/plan/planPage'
import { getAttraction } from 'modules/attraction/api'

// !Временные роуты, проект в процессе перевода на next.js 13
// Поэтому не добавил react.lazy

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <SearchAttraction />,
    children: [
      {
        path: ':friendlyURL',
        element: <AttractionPage />,
        loader: getAttraction,
      },
    ],
  },
  {
    path: '/plan',
    element: <PlanPage />,
  },
  // ...
])
