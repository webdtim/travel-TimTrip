import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import cn from 'classnames'
import Checkbox from 'UI/checkbox/Checkbox'
import AutoResizeTextarea from 'UI/textarea/AutoResizeTextarea'
import { ReactComponent as DragIcon } from 'uploads/draggable.svg'
import { IChecklistItemProps } from 'types/ui/checklist'
import { TFieldBehaviors } from 'types/imperative_behaviors/behaviors'
import useChecklistItem from './useChecklistItem'

const Item = React.forwardRef<TFieldBehaviors, IChecklistItemProps>(
  ({ id, value, checked, index, setFocusOnTodo }, ref) => {
    const {
      isChecked,
      checkedHandler,
      changeContent,
      deleteEmptyField,
      handlerKeyDown,
    } = useChecklistItem({ id, value, checked, index, setFocusOnTodo })

    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={cn('checklist-item', {
              [`checklist-item--done`]: isChecked,
              [`checklist-item--dragging`]: snapshot.isDragging,
            })}
          >
            <Checkbox checked={isChecked} onChange={checkedHandler} />
            <AutoResizeTextarea
              ref={ref}
              value={value}
              placeholder="Напишите что-нибдуь"
              onChange={changeContent}
              onBlur={deleteEmptyField}
              onKeyDown={handlerKeyDown}
            />
            <div className="checklist-item__drag">
              <DragIcon />
            </div>
          </div>
        )}
      </Draggable>
    )
  }
)

export default Item
