import { twMerge } from 'tailwind-merge'
import { ComponentProps, forwardRef } from 'react'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[250px] h-[100vh + 10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge('flex flex-col w-full overflow-auto', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
