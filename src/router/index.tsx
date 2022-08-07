/* eslint-disable @typescript-eslint/no-unused-vars */
// 占位符
import { useRoutes } from 'react-router-dom'
import staticRoutes from '@config/routes'

const RouterTree = () => {
  const RouterElement = useRoutes(staticRoutes)
  return RouterElement
}

export default RouterTree
