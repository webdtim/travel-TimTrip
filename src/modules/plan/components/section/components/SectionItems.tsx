import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ContextPlanSectionStore } from '../ContextPlanSection'
import Checklist from 'components/checklist/Checklist'
import Editor from 'components/editor/Editor'
import StoreCheckList from 'store/UI/checklist-store'
import StoreEditor from 'store/UI/editor-store'
import { StoreTypes } from 'types/storeTypes'

const SectionItems = observer(() => {
  const store = useContext(ContextPlanSectionStore)

  const openMenu = (id: string, name: string) => {
    store.openMenuSectionItem(id, name)
  }
  return (
    <>
      {store.items.map((itemStore) => {
        if (itemStore.type === StoreTypes.CHECKLIST)
          return (
            <Checklist
              key={itemStore.id}
              store={itemStore as StoreCheckList}
              openMenu={openMenu}
            />
          )
        else if (itemStore.type === StoreTypes.EDITOR)
          return <Editor key={itemStore.id} store={itemStore as StoreEditor} />
      })}
    </>
  )
})

export default SectionItems
