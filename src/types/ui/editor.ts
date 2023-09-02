import type {
  EditorState,
  SerializedEditorState,
  SerializedLexicalNode,
  SerializedElementNode,
} from 'lexical'

export type TEditorProps = {
  initialEditorState?: string
  placeholder?: string
}

export type TEditor = {
  id: string
  type: 'editor'
  content: TMinifiedElement[] | null
}

export type TMinifiedElement = {
  type: string
  children?: TMinifiedElement[]
  format?: number | string
  url?: string
  text?: string
}

export type TSerializedEditorState =
  SerializedEditorState<SerializedElementNode>

export type TSerializedElementList = SerializedElementNode[]
