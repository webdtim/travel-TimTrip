import { useCallback, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { ContextChecklistStore } from '../ContextChecklist'
import Item from './Item'
import { TFieldBehaviors } from 'types/imperative_behaviors/behaviors'

interface TodosProps {
  fieldRefs: { current: TFieldBehaviors[] }
  setFocusOnTodo: (index?: number) => void
}

const Items: React.FC<TodosProps> = observer(
  ({ setFocusOnTodo, fieldRefs }) => {
    const store = useContext(ContextChecklistStore)
    const addFieldRef = useCallback(
      (ref: TFieldBehaviors | null, index: number) => {
        if (index === 0) fieldRefs.current = []
        if (ref) fieldRefs.current.push(ref)
      },
      [store.items]
    )

    return (
      <DragDropContext
        onDragEnd={(result) => {
          store.reOrder(result)
        }}
      >
        <Droppable droppableId={store.id}>
          {(provided, snapshot) => (
            <div
              className="checklist__items"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {store.items.map((item, index) => (
                <Item
                  {...item}
                  key={item.id}
                  index={index}
                  ref={(ref) => addFieldRef(ref, index)}
                  setFocusOnTodo={setFocusOnTodo}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
)

export default Items
