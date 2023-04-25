import { useDarkModeStore } from "../store"
import {
  DOC_ELEMENT_CLASSLIST,
  IS_DARK_MODE_ACTIVE,
  THEME
} from "@/utils/constants"
import { storeInLocalStorage } from "@/utils/functions"
import { useLayoutEffect } from "react"

export const useDarkMode = () => {
  const { isActive, toggleDarkMode } = useDarkModeStore()

  const handleToggleDarkMode = () => {
    const isDark = DOC_ELEMENT_CLASSLIST.toggle(THEME.DARK)
    toggleDarkMode(isDark)
    storeInLocalStorage(
      THEME.TOKEN,
      isDark ? THEME.DARK : THEME.LIGHT
    )
  }

  useLayoutEffect(() => {
    if (IS_DARK_MODE_ACTIVE) {
      DOC_ELEMENT_CLASSLIST.add(THEME.DARK)
    } else {
      DOC_ELEMENT_CLASSLIST.remove(THEME.DARK)
    }
  }, [])

  return {
    isActive,
    handleToggleDarkMode
  }
}
