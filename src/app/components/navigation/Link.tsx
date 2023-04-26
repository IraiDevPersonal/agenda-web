import { twCn } from "@/utils/tw-classNames"
import { NavLink } from "react-router-dom"

function activeClassNames(isActive: boolean) {
  if (isActive) {
    const className =
      "bg-primary-500 dark:bg-primary-600 text-neutral-50 hover:bg-primary-600 dark:hover:bg-primary-500"
    return className
  }
  const className =
    "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
  return className
}

interface Props {
  children: React.ReactNode
  to: string
}

export const Link = ({ children, to }: Props) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          twCn([
            "cursor-pointer rounded-lg px-3 py-2",
            "flex items-center gap-3",
            "transition-colors duration-200",
            activeClassNames(isActive)
          ])
        }
      >
        {children}
      </NavLink>
    </li>
  )
}
