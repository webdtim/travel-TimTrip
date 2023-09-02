import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import AutoLinkPlugin from './plugin/AutoLinkPlugin'
import ExampleTheme from './theme'
import './editor.scss'

import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import StoreEditor from 'store/UI/editor-store'
import { observer } from 'mobx-react-lite'

function Placeholder() {
  return (
    <div className="editor__placeholder">
      Начните писать ваши заметки здесь...
    </div>
  )
}

interface IEditorProps {
  store: StoreEditor
}

const Editor: React.FC<IEditorProps> = observer(({ store }) => {
  const editorConfig = {
    namespace: 'testName',
    editorState: JSON.stringify(store?.content),
    theme: ExampleTheme,
    onError(error: Error) {
      console.log(error)
      throw error
    },
    nodes: [AutoLinkNode, LinkNode],
  }
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor">
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor__field" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoLinkPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  )
})

export default Editor
