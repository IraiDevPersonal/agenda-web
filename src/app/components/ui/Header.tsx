import { IconBell } from "@tabler/icons-react"
import { BurgerBtn, IconButton } from "../"
import { DarkModeSw } from "./DarkModeSw"
import { twCn } from "@/utils/tw-classNames"

export const Header = () => {
  return (
    <header
      className={twCn([
        "bg_base__primary bg-opacity-20 backdrop-blur",
        "sticky top-0",
        "flex h-10 items-center gap-2"
      ])}
    >
      <BurgerBtn />

      <div className="flex-1" />
      <IconButton className="hover:bg-neutral-300 dark:hover:bg-neutral-700">
        <IconBell />
      </IconButton>

      <DarkModeSw />
    </header>
  )
}
