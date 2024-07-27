import {
  Content,
  RootLayout,
  Sidebar,
  DraggableTopBar,
  ActionButtonRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'
import { useRef } from "react";

const App = (): JSX.Element => {
  const contentContaierRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    if (contentContaierRef.current) {
      contentContaierRef.current.scrollTo(0, 0)
    }
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className={'p-2 bg-zinc-100'}>
          <ActionButtonRow className={'flex justify-between mt-1'} />
          <NotePreviewList className={'mt-3 space-y-1'} onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContaierRef} className={'border border-l-white/20'}>
          <FloatingNoteTitle className={'pt-2'} />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
