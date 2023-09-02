import { makeObservable, observable, action } from 'mobx'
import type {
  TEditor,
  TMinifiedElement,
  TSerializedEditorState,
  TSerializedElementList,
} from 'types/ui/editor'
import { StoreTypes } from 'types/storeTypes'

import { minify } from 'components/editor/helpers/minify'
import { unminify } from 'components/editor/helpers/unminify'
import { createSerializedEditorState } from 'components/editor/helpers/createState'
import { generateId } from 'utils/helpers/generateId'

export const createEmptyEditor = (): TEditor => ({
  id: generateId(StoreTypes.EDITOR),
  type: StoreTypes.EDITOR,
  content: null,
})

class StoreEditor {
  content: TSerializedEditorState = createSerializedEditorState()
  type = StoreTypes.EDITOR
  id = ''
  constructor({ id, content: minifiedContent }: TEditor) {
    makeObservable(this, {
      content: observable,
      setState: action,
    })
    this.id = id
    this.setContentFromMinifiedData(minifiedContent)
  }

  setState(newState: TSerializedEditorState) {
    this.content = newState
  }

  getMinifiedState() {
    return minify(this.content?.root.children)
  }

  setContentFromMinifiedData(minifiedData: TMinifiedElement[] | null) {
    if (minifiedData) {
      const data = unminify(minifiedData)
      const newState = createSerializedEditorState(data)
      this.setState(newState)
    } else this.setState(createSerializedEditorState())
  }
}

export default StoreEditor
