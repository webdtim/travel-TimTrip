import { useContext } from 'react'
import { ContextChecklistStore } from '../ContextChecklist'
import InputTransparent from 'UI/input-transparent/InputTransparent'

const Title: React.FC = () => {
  const store = useContext(ContextChecklistStore)
  return (
    <InputTransparent
      value={store.title}
      placeholder="Введите название"
      onChange={store.editTitle}
    />
  )
}

export default Title
