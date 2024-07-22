import { NoteInfo } from '@shared/models'

export const notesMock: NoteInfo[] = [
  {
    title: 'Welcome 🔥',
    lastModified: new Date().getTime()
  },
  {
    title: 'Note 2',
    lastModified: Date.now()
  },
  {
    title: 'Note 3',
    lastModified: Date.now()
  }
]
