import { Routes, Route } from 'react-router-dom'
import App from '@/App'
import DynamicAksara from '@/layouts/Kelas/DynamicAksara'
import NotFound from '@/layouts/NotFound'
import { route } from './Routes'

const Router = () => {
  const pageRoutes = route.map((item) => {
    return item.children ? (
      <Route key={item.name + item.path} path={`${item.path}`}>
        <Route index element={item.element} />
        {item.children.map((child) => (
          <>
            <Route
              key={child.name}
              path={`/${item.path}/${child.path}`}
              element={child.element}
            />
            <Route
              key={child.name + item.path}
              path={`/${item.path}/${child.path}/:name`}
              element={<DynamicAksara />}
            />
          </>
        ))}
      </Route>
    ) : (
      <Route key={item.name} path={`${item.path}`} element={item.element} />
    )
  })

  return (
    <Routes>
      <Route element={<App />}>{pageRoutes}</Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router
