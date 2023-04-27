import { useId } from "react"
import {
  IconSunFilled,
  IconMoonFilled
} from "@tabler/icons-react"
import { useDarkMode } from "@/app/hooks/useDarkMode"
import { twCn } from "@/utils/tailwind.utilities"

export const DarkModeSw = () => {
  const { isActive, handleToggleDarkMode } = useDarkMode()
  const darKModeId = useId()
  return (
    <label
      htmlFor={darKModeId}
      className={twCn([
        "relative h-9 w-14 cursor-pointer rounded-full bg-neutral-300 p-1",
        "dark:bg-neutral-700"
      ])}
    >
      <input
        hidden
        type="checkbox"
        name="dark-mode"
        id={darKModeId}
        checked={isActive}
        onChange={handleToggleDarkMode}
      />
      <span
        className={twCn([
          "absolute grid h-7 w-7 place-content-center rounded-full bg-neutral-50",
          "translate-x-0 transition-transform duration-200",
          "dark:translate-x-3/4 dark:bg-neutral-900"
        ])}
      >
        {isActive ? (
          <IconMoonFilled className="text-indigo-400" />
        ) : (
          <IconSunFilled className="text-amber-600" />
        )}
      </span>
    </label>
  )
}
