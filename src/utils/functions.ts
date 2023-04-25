export function storeInLocalStorage<T>(
  key: string,
  payload: T
) {
  const formatedPayload =
    typeof payload === "string"
      ? payload
      : JSON.stringify(payload)
  window.localStorage.setItem(key, formatedPayload)
}

export function getFromLocalStorage(key: string) {
  return window.localStorage.getItem(key)
}

export function removeFromLocalStorage(key: string) {
  window.localStorage.removeItem(key)
}
