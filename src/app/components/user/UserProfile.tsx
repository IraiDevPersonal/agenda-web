import { IconSelector } from "@tabler/icons-react"
import { twCn } from "@/utils/tw-classNames"

export const UserProfile = () => {
  return (
    <>
      <UserButton />
    </>
  )
}

const UserButton = () => {
  return (
    <button
      className={twCn([
        "flex w-full items-center justify-between gap-3 px-3 py-1.5",
        "cursor-pointer outline-none transition-colors duration-200",
        "rounded-lg bg-neutral-200/60 text-neutral-500 hover:bg-neutral-300/60",
        "dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600"
      ])}
    >
      <div className="flex items-center gap-3">
        <img
          className="h-11 w-11 rounded-full object-cover"
          src="https://avatars.githubusercontent.com/u/85415332?v=4"
          alt="user avatar"
        />
        <span className="text-lg font-semibold">
          User N.
        </span>
      </div>
      <IconSelector />
    </button>
  )
}
