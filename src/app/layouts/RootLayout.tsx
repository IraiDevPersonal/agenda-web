import { useLayoutEffect } from "react"
import { LayoutProps } from "@/utils/types"

const RootLayout = ({
  children,
  pageTitle,
  className = ""
}: LayoutProps) => {
  useLayoutEffect(() => {
    document.title = `Agenda | ${pageTitle}`
  }, [pageTitle])
  return (
    <main
      className={`
      bg_base__primary min-h-screen w-full text-neutral-800 transition-colors duration-100 dark:text-neutral-50
      ${className}
    `}
    >
      {children}
    </main>
  )
}

export default RootLayout
