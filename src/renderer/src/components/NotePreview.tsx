import { ComponentProps } from 'react'
import { NoteInfo } from '@shared/models'
import { cn } from '@renderer/utils'
import { formatDateFromMs } from '@renderer/utils'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastModified,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-100 hover:bg-zinc-200': !isActive,
          'bg-zinc-300': isActive
        },
        className
      )}
      {...props}
    >
      <h3 className={'mb-1 font-bold truncate'}>{title}</h3>
      <span className={'inline-block w-full mb-2 text-xs font-light text-left'}>
        {formatDateFromMs(lastModified)}
      </span>
    </div>
  )
}
