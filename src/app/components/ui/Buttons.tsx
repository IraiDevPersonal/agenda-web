interface Props {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  hidden?: boolean
  onClick?: () => void
}

const classNames = (
  className: string,
  disabled: boolean
): string => {
  const disabledClass =
    "disabled:bg-transparent disabled:text-neutral-500"
  const splited = className.split(" ")
  const hiddenClass =
    splited.find((el) => el.includes("hidden")) ?? ""

  if (disabled) return `${disabledClass} ${hiddenClass}`

  return `${className} cursor-pointer`
}

export const IconButton = ({
  children,
  className = "",
  disabled = false,
  hidden = false,
  onClick
}: Props) => {
  if (hidden) return null
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      grid h-9 w-9 place-content-center rounded-xl outline-none transition-colors duration-200
      ${classNames(className, disabled)}
    `}
    >
      {children}
    </button>
  )
}
