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
      className={`bg_base__primary flex h-screen w-80 flex-col divide-y divide-neutral-400 border-r border-neutral-400 dark:divide-neutral-700 dark:border-neutral-700 ${className}`}
    >
      {children}
      <section className="flex-1 p-8">
        <nav>
          <ul className="space-y-1">
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </nav>
      </section>
      <footer className="p-8">Usuario</footer>
    </aside>
  )
}
