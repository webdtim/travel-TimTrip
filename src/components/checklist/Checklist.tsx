import React, { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import Items from './components/Items'
import Title from './components/Title'
import setFocus from 'utils/helpers/setFocus'
import { ReactComponent as MenuIcon } from 'uploads/dotes.svg'
import { TFieldBehaviors } from 'types/imperative_behaviors/behaviors'
import './checklist.scss'
import StoreCheckList from 'store/UI/checklist-store'
import { ContextChecklistStore } from './ContextChecklist'
import Btn from 'UI/button/Btn'

interface IChecklistProps {
  store: StoreCheckList
  openMenu: (id: string, name: string) => void
}

const Checklist: React.FC<IChecklistProps> = observer(({ store, openMenu }) => {
  const fieldRefs = useRef<TFieldBehaviors[]>([])

  const setFocusOnTodo = (i?: number) => {
    setFocus(fieldRefs.current, i)
  }

  const addItemAndFocus = () => {
    store.addItem().then(() => setFocusOnTodo())
  }

  return (
    <ContextChecklistStore.Provider value={store}>
      <div className="checklist">
        <div className="checklist__head">
          <Title />
          <Btn
            className="checklist__menu"
            modifiers={['transparent']}
            width="min-width"
            height="auto"
            onClick={() => openMenu(store.id, 'чек-лист')}
          >
            <MenuIcon />
          </Btn>
        </div>
        <Items setFocusOnTodo={setFocusOnTodo} fieldRefs={fieldRefs} />
        <Btn
          className="checklist__add"
          width="min-width"
          height="auto"
          onClick={addItemAndFocus}
        >
          + Добавить
        </Btn>
      </div>
    </ContextChecklistStore.Provider>
  )
})

export default Checklist
