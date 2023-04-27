import { useEffect, useRef } from "react"

interface Props {
  handler: () => void
}

export const useClickOutside = ({ handler }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        handler()
      }
    }

    window.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener(
        "click",
        handleClickOutside
      )
    }
  }, [ref])

  return [ref, handler] as const
}
