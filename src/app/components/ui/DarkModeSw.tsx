import { useId } from "react"
import {
  IconSunFilled,
  IconMoonFilled
} from "@tabler/icons-react"
import { useDarkMode } from "@/app/hooks/useDarkMode"

export const DarkModeSw = () => {
  const { isActive, handleToggleDarkMode } = useDarkMode()
  const darKModeId = useId()
  return (
    <label
      htmlFor={darKModeId}
      className="w-11 cursor-pointer rounded-full bg-neutral-300 p-1 py-1.5 pl-1.5 dark:bg-neutral-700"
    >
      <input
        hidden
        type="checkbox"
        name="dark-mode"
        id={darKModeId}
        checked={isActive}
        onChange={handleToggleDarkMode}
      />
      <span className="left-0 grid w-4 h-4 transition-transform duration-200 rounded-full place-content-center dark:translate-x-full">
        {isActive ? (
          <IconMoonFilled className="text-indigo-400" />
        ) : (
          <IconSunFilled className="text-amber-600" />
        )}
      </span>
    </label>
  )
}
