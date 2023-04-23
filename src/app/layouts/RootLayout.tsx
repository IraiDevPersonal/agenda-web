import { useLayoutEffect } from "react"
import { LayoutProps } from "@/utils/types"

const RootLayout = ({
  children,
  pageTitle,
  className = ""
}: LayoutProps) => {
  useLayoutEffect(() => {
    document.title = `Template | ${pageTitle}`
  }, [pageTitle])
  return (
    <main
      className={`
      min-h-screen w-full bg-neutral-200 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-50
      ${className}
    `}
    >
      {children}
    </main>
  )
}

export default RootLayout
