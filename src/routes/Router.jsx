import { Routes, Route } from 'react-router-dom'
import App from '@/App'
import DynamicAksara from '@/components/Kelas/DynamicAksara'
import NotFound from '@/layouts/NotFound'
import { route } from './Routes'

export default function Router() {
  const pageRoutes = route.map((item) => {
    return item.children ? (
      <Route key={item.name + item.path} path={`${item.path}`}>
        <Route index element={item.element} />
        {item.children.map((child) => {
          return !child.static ? (
            <>
              <Route
                key={child.name}
                path={`/${item.path}/${child.path}`}
                element={child.element}
              />
              <Route
                key={child.name + item.path}
                path={`/${item.path}/${child.path}/:name`}
                element={<DynamicAksara kelas={child.name} />}
              />
            </>
          ) : (
            <Route
              key={child.name}
              path={`/${item.path}/${child.path}`}
              element={child.element}
            />
            // <Route path='*' element={<NotFound />} />
          )
        })}
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
