import { LayoutProps } from "@/utils/types"
import RootLayout from "./RootLayout"
import { Header } from "../components"

const MainLayout = ({
  children,
  pageTitle,
  className
}: LayoutProps) => {
  return (
    <RootLayout pageTitle={pageTitle} className="flex">
      <aside className="hidden w-80">sidebar</aside>
      <main className="flex flex-col flex-1 gap-4">
        <Header />
        <div className={className}>{children}</div>
      </main>
    </RootLayout>
  )
}

export default MainLayout
