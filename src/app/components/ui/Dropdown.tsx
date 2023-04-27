import { useState } from "react"
import { useTransition, animated } from "@react-spring/web"
import {
  TwPositionEl,
  positionEl as positionElFn,
  twCn
} from "@/utils/tailwind.utilities"
import { useClickOutside } from "@/app/hooks"

interface Props {
  children: React.ReactNode
  btnComponent: React.ReactNode
  controlled?: boolean
  isOpen?: boolean
  positionEl?: TwPositionEl
  onClick?: () => void
}

export const Dropdown = ({
  children,
  btnComponent,
  controlled = false,
  isOpen = false,
  positionEl = "left-bottom",
  onClick
}: Props) => {
  const [innerIsOpen, setInnerIsOpen] = useState(true)
  const [menuRef, handleToggle] = useClickOutside({
    handler: () => {
      if (!controlled) {
        setInnerIsOpen((prevValue) => !prevValue)
        return
      }
      onClick?.()
    }
  })
  const transition = useTransition(
    controlled ? isOpen : innerIsOpen,
    {
      from: { opacity: 0, transform: "scale(0.9)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0.9)" }
    }
  )

  return (
    <menu
      ref={menuRef}
      onClick={handleToggle}
      className="relative"
    >
      <>{btnComponent}</>
      {transition(
        (style, item) =>
          item && (
            <animated.ul
              style={style}
              className={twCn([
                "w-full divide-y overflow-hidden rounded-xl",
                "absolute z-50",
                "divide-neutral-300 border border-neutral-300 bg-neutral-50",
                "dark:divide-neutral-600 dark:border-neutral-600 dark:bg-neutral-700",
                positionElFn(positionEl)
              ])}
            >
              {children}
            </animated.ul>
          )
      )}
    </menu>
  )
}

export const DropdownItem = ({
  children,
  onClick
}: Pick<Props, "children" | "onClick">) => {
  return (
    <li
      onClick={onClick}
      className={twCn([
        "flex items-center gap-3 px-4 py-2 transition-colors duration-200",
        "font-medium hover:bg-primary-500 hover:text-neutral-50",
        "hover:dark:bg-primary-600"
      ])}
    >
      {children}
    </li>
  )
}
