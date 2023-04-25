import { create } from "zustand"
import { IS_DARK_MODE_ACTIVE } from "@/utils/constants"

interface Store {
  isActive: boolean
  toggleDarkMode: (value: boolean) => void
}

export const useDarkModeStore = create<Store>((set) => ({
  isActive: IS_DARK_MODE_ACTIVE,
  toggleDarkMode: (value) =>
    set(() => ({ isActive: value }))
}))
