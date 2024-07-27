import { ActionButton, ActionButtonProps } from '@/components'
import { LuFileSignature } from 'react-icons/lu'
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '@/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleNewNote = () => {
    createEmptyNote()
  }

  return (
    <ActionButton onClick={handleNewNote} {...props}>
      <LuFileSignature className={'w-4 h-4 text-zinc-900'} />
    </ActionButton>
  )
}
