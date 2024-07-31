import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 border border-zinc-800/50 hover:bg-zinc-300/50 transition-colors rounded-md' +
          ' duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
