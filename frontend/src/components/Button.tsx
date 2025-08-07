import type { ButtonHTMLAttributes, ReactElement } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  text: string
  startIcon?: ReactElement
}

export default function Button ({
  text,
  variant = 'primary',
  startIcon
}: ButtonProps) {
  const buttonStyles = {
    primary: 'text-white bg-purple-700 border-0',
    secondary:
      'bg-purple-100 text-purple-700 border-2 border-purple-700 text-center'
  }

  const defaultStyles: string =
    'p-2 m-2 rounded-lg w-auto h-auto hover:cursor-pointer transition-all hover:scale-105 antialiased font-sm flex flex-row gap-3 items-center justify-center shadow-md text-sm'

  return (
    <button className={clsx(defaultStyles, buttonStyles[variant])}>
      {startIcon}
      {text}
    </button>
  )
}
