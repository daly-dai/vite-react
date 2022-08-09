import staticRoutes from '@/hook/useGenerateRoutes'
import RouterGuard from '@/hook/useRouterGuard'
import onRouteBefore from './guard'

const RouterTree = () => {
  return RouterGuard({ onRouterBefore: onRouteBefore, routers: staticRoutes })
}

export default RouterTree
