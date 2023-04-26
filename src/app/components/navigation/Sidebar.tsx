import { twCn } from "@/utils/tw-classNames"
import { Link, UserProfile } from "../"

interface Props {
  children: React.ReactNode
  className?: string
}

export const Sidebar = ({
  children,
  className = ""
}: Props) => {
  return (
    <aside
      className={twCn([
        "flex h-screen w-80 flex-col bg-neutral-50",
        "divide-y divide-neutral-200 border-r border-neutral-200",
        "dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800",
        className
      ])}
    >
      {children}
      <section className="flex-1 p-8">
        <nav>
          <ul className="space-y-1">
            <Link to="/">Item 1</Link>
            <Link to="/2">Item 2</Link>
            <Link to="/3">Item 3</Link>
            <Link to="/4">Item 4</Link>
          </ul>
        </nav>
      </section>
      <footer className="p-8">
        <UserProfile />
      </footer>
    </aside>
  )
}
