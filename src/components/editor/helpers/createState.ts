import { TSerializedEditorState, TSerializedElementList } from 'types/ui/editor'

export function createSerializedEditorState(
  unminifyState?: TSerializedElementList
): TSerializedEditorState {
  const newState: TSerializedEditorState = {
    root: {
      children: [
        {
          children: [],
          direction: 'rtl',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'rtl',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }

  if (unminifyState) newState.root.children = unminifyState

  return newState
}
