import { IconMenu2, IconX } from "@tabler/icons-react"
import { IconButton, Sidebar } from ".."
import { useToggle } from "@/app/hooks"

export const BurgerBtn = () => {
  const [isOpen, handleOpen, handleClose] = useToggle()
  return (
    <div>
      <IconButton
        onClick={handleOpen}
        className="hover:bg-neutral-300 dark:hover:bg-neutral-700 md:hidden"
      >
        <IconMenu2 />
      </IconButton>

      {isOpen && (
        <Sidebar className="fixed top-0 left-0">
          <header className="flex items-center justify-between gap-3 p-6 pr-3">
            <h3 className="text-xl font-semibold">Menu</h3>
            <IconButton
              onClick={handleClose}
              className="hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconX />
            </IconButton>
          </header>
        </Sidebar>
      )}
    </div>
  )
}
