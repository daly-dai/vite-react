/* eslint-disable @typescript-eslint/no-unused-vars */
// 占位符
import { useRoutes } from 'react-router-dom'
import staticRoutes from '@/service/router/index'
import { operationAttrToNodes } from '@/utils/tree'
import { cloneDeep, isString } from 'lodash-es'
import { LazyLoad } from '@/packages/components'

// const SuspenseRoutes = routerTree => {
//   const stash = cloneDeep(routerTree)
//   const result = operationAttrToNodes(
//     stash,
//     (node: any) => {
//       if (!isString(node['element'])) return

//       node['element'] = LazyLoad(node['element'])
//     },
//     'children'
//   )

//   return result
// }
// eslint-disable-next-line no-empty-pattern
const RouterTree = () => {
  // const suspenseRoutes = SuspenseRoutes(staticRoutes)

  const RouterElement = useRoutes(staticRoutes)
  return RouterElement
}

export default RouterTree
