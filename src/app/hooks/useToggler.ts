import { useState } from "react"

export const useToggle = (
  initialValue: boolean | undefined = false
) => {
  const [isOpen, setisOpen] = useState(initialValue)
  const handleOpen = () => {
    setisOpen(true)
  }

  const handleClose = () => {
    setisOpen(false)
  }

  return [isOpen, handleOpen, handleClose] as const
}
