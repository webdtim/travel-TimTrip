import { createContext } from 'react'
import StoreModalSearch from 'store/search/modal-search-store'

export const ContextSearchModalStore = createContext(new StoreModalSearch())
