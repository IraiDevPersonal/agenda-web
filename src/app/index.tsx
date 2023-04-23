import { Suspense, lazy } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { routes } from "@/utils/constants"

const HomePage = lazy(() => import("./pages/home/page"))

const App = () => {
  return (
    <Suspense fallback={<>cargando...</>}>
      <HashRouter>
        <Routes>
          <Route
            path={routes["public:home"]}
            element={<HomePage />}
          />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default App
