import { Routes, Route } from 'react-router-dom'
import App from './App'
import { route } from './Routes'

const Router = () => {
  const pageRoutes = route.map((item) => {
    return item.children ? (
      <Route key={item.name} path={`${item.path}`}>
        <Route index element={item.element} />
        {item.children.map((child) => (
          <Route
            key={child.name}
            path={`/${item.path}/${child.path}`}
            element={child.element}
          />
        ))}
      </Route>
    ) : (
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
