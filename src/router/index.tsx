import staticRoutes from '@hooks/useGenerateRoutes'
import RouterGuard from '@hooks/useRouterGuard'
import onRouteBefore from './guard'

const RouterTree = () => {
  return RouterGuard({ onRouterBefore: onRouteBefore, routers: staticRoutes })
}

export default RouterTree
