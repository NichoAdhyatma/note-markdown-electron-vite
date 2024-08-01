import { homedir } from 'os'
import { appDirectoryName, fileEncoding } from '@shared/contants'
import { ensureDir, readdir, readFile, stat, writeFile } from 'fs-extra'
import { NoteInfo } from '@shared/models'
import { GetNotes, ReadNote, CreateNote } from '@shared/types'
import { dialog } from 'electron'
import * as path from 'node:path'

export const getRootDir = () => {
  return `${homedir()}\\${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

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

export const readNote: ReadNote = async (filename: string) => {
  const rootDir = getRootDir()

  return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

export const writeNote = async (filename: string, content: string) => {
  const rootDir = getRootDir()

  console.info(`Writing note to ${rootDir}/${filename}.md`)

  return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}

export const createNote: CreateNote = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New Note',
    defaultPath: `${rootDir}/Untitled.md`,
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })

  if (canceled || !filePath) {
    console.log('Note creation canceled')
    return false
  }

  const { name: filename, dir: parentDir } = path.parse(filePath)

  if (parentDir.trim() != rootDir.trim()) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation Failed',
      message: `Notes must be created in ${rootDir}
    Avoid using other directories`
    })

    return false
  }

  console.info(`Creating note at ${filePath}`)

  await writeFile(filePath, '', { encoding: fileEncoding })

  return filename
}
