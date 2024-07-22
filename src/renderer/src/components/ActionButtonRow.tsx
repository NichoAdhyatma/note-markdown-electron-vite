import { DeleteNoteButton, NewNoteButton } from './Button'
import { ComponentProps } from 'react'

export const ActionButtonRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
