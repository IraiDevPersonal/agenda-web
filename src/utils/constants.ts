import { getFromLocalStorage } from "./functions"

export const routes = {
  "public:home": "/"
}

export const DOC_ELEMENT_CLASSLIST =
  document.documentElement.classList

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
  TOKEN: "theme"
}

export const IS_DARK_MODE_ACTIVE =
  getFromLocalStorage(THEME.TOKEN) === THEME.DARK ||
  (!(THEME.TOKEN in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)")
      .matches)
