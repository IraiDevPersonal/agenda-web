import { IconMenu2, IconX } from "@tabler/icons-react"
import { useTransition, animated } from "@react-spring/web"
import { IconButton, Sidebar } from ".."
import { useToggle } from "@/app/hooks"

interface Props {
  isOpen: boolean
  onClose: () => void
}

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

      <InnerSidebar isOpen={isOpen} onClose={handleClose} />
    </div>
  )
}

const InnerSidebar = ({ isOpen, onClose }: Props) => {
  const transition = useTransition(isOpen, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" }
  })
  return transition(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="fixed left-0 top-0"
        >
          <Sidebar>
            <header className="flex items-center justify-between gap-3 p-6 pr-3">
              <h3 className="text-xl font-semibold">
                Menu
              </h3>
              <IconButton
                onClick={onClose}
                className="hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconX />
              </IconButton>
            </header>
          </Sidebar>
        </animated.div>
      )
  )
}
