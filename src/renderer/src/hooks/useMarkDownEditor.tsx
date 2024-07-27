import { useAtomValue } from 'jotai'
import { selectedNoteAtom } from '@/store'

export const useMarkDownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return {
    selectedNote
  }
}
