import { Routes, Route } from 'react-router-dom'
import App from './App'
import { route } from './Routes'

const Router = () => {
  const pageRoutes = route.map((item) => {
    return (
      <Route key={item.name} path={`${item.path}`} element={item.element} />
    )
  })

  return (
    <Routes>
      <Route element={<App />}>{pageRoutes}</Route>
    </Routes>
  )
}

export default Router
