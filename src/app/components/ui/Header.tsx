import { IconBell } from "@tabler/icons-react"
import { BurgerBtn, IconButton } from "../"
import { DarkModeSw } from "./DarkModeSw"

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between h-10 gap-2 px-2 bg_base__primary bg-opacity-20 backdrop-blur">
      <BurgerBtn />

      <div className="flex-1" />

      <IconButton className="hover:bg-neutral-300 dark:hover:bg-neutral-700">
        <IconBell />
      </IconButton>
      <DarkModeSw />
    </header>
  )
}
