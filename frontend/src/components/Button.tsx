import type { ReactElement } from 'react'
// import clsx from 'clsx'

interface ButtonProps {
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
    'px-10 py-2 m-2 rounded-lg w-auto h-auto hover:cursor-pointer transition-all hover:scale-110 antialiased font-normal flex flex-row gap-3'

  return (
    <button className={buttonStyles[variant] + defaultStyles}>
      {startIcon}
      {text}
    </button>
  )
}
