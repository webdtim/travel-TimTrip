import { RouterProvider } from 'react-router-dom'
import { mainRouter } from 'routers/mainRouter'
import './reset.scss'
import './global-styles.scss'

import RootStore from 'store/root-store'
import { RootStoreContext } from 'store/useStore'

import GlobalModals from './GlobalModals'

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <RouterProvider router={mainRouter} />
      <GlobalModals />
    </RootStoreContext.Provider>
  )
}

export default App
