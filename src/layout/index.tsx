import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routerConfig, { RouterConfig } from '../router'
import AsyncComponent from '@/components/async'
import { checkAuthority } from "@/utils/authority"
import Page403 from "@/views/403"

function Layout() {
  const renderRoute = (routerConfig: RouterConfig[]) => {
    let routes: any[] = []
    routerConfig.forEach(async (item) => {
      if(checkAuthority(item.authority)) {
        let url = item.component
        if(item.index) {
          url = routerConfig.find(config => item.redirect = config.path)?.component
        }
        const Com = AsyncComponent(() => import('../' + url))
        if (item.routes && item.routes.length > 0) {
          routes.push(
            <Route key={item.path} path={item.path} element={<Com></Com>}>
              {renderRoute(item.routes)}
            </Route>
          )
        } else {
          const R = item?.index ? <Route key={item.redirect + 'd'} index element={<Com/>}/>: <Route key={item.path} path={item.path} element={<Com/>}/>
          routes.push(R)
        }
      } else {
        routes.push(<Route key={item.path} path={item.path} element={<Page403 />}/>)
      }
    })
    return routes
  }
  return (
    <BrowserRouter>
      <Routes>
        {renderRoute(routerConfig)}
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
