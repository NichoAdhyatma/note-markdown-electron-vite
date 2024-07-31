import { homedir } from 'os'
import { appDirectoryName, fileEncoding } from '@shared/contants'
import { ensureDir, readdir, stat } from 'fs-extra'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/types'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  console.log(rootDir)

  await ensureDir(rootDir)

  const notesFileName = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileName.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (fileName: string) => {
  const fileStats = await stat(`${getRootDir()}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''),
    lastModified: fileStats.mtimeMs
  } as NoteInfo
}
