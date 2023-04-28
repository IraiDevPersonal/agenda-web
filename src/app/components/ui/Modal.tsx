import { createPortal } from "react-dom"
import { useTransition, animated } from "@react-spring/web"
import { IconX } from "@tabler/icons-react"
import { IconButton } from ".."
import { twCn } from "@/utils/tailwind.utilities"

interface Props {
  isOpen: boolean
  title?: string
  children: React.ReactNode
  overlayClose?: boolean
  onClose: () => void
}

export const Modal = ({
  children,
  title,
  isOpen,
  overlayClose = false,
  onClose
}: Props) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(40px)" }
  })
  return createPortal(
    <Backdrop
      isOpen={isOpen}
      onClose={overlayClose ? onClose : () => {}}
    >
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              onClick={(e) => e.stopPropagation()}
              className={twCn([
                "bg-neutral-50",
                "divide-y divide-neutral-200 rounded-xl ring-2 ring-neutral-200",
                "dark:divide-neutral-700 dark:bg-neutral-800 dark:ring-neutral-700"
              ])}
            >
              {title && (
                <header className="flex items-center justify-between gap-3 px-4 py-2 pr-2">
                  <h1 className="text-xl font-semibold">
                    {title}
                  </h1>
                  <IconButton
                    onClick={onClose}
                    className={twCn([
                      "hover:bg-neutral-200",
                      "dark:bg-neutral-700"
                    ])}
                  >
                    <IconX />
                  </IconButton>
                </header>
              )}
              {isOpen ? children : null}
            </animated.div>
          )
      )}
    </Backdrop>,
    document.body
  )
}

const Backdrop = ({
  children,
  isOpen,
  onClose
}: Omit<Props, "title" | "overlayClose">) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transition(
    (style, item) =>
      item && (
        <animated.main
          style={style}
          onClick={onClose}
          className={twCn([
            "fixed inset-0 z-[999]",
            "flex h-screen w-full items-center justify-center overflow-hidden",
            "bg-black/30 backdrop-blur"
          ])}
        >
          {children}
        </animated.main>
      )
  )
}
