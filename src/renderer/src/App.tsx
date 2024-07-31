import {
  Content,
  RootLayout,
  Sidebar,
  ActionButtonRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'
import { useRef } from 'react'

const App = (): JSX.Element => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTo(0, 0)
    }
  }

  return (
    <>
      <RootLayout>
        <Sidebar className={'p-2 bg-zinc-100'}>
          <ActionButtonRow className={'flex justify-between mt-1'} />
          <NotePreviewList className={'mt-3 space-y-1'} onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className={'border border-l-white/20'}>
          <FloatingNoteTitle className={'pt-2'} />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
