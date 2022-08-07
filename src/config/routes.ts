// import { keys} from 'lodash-es'
import { RouteObject } from '@/types/router';
import { arrayToTree } from '@utils/tree'
import { concat } from 'lodash-es';
const staticPath = "/src/service/router/"

function rootRouteData(modules: any): RouteObject[] {
  const root = (modules[`${staticPath}root.ts`] as any).default

  root.forEach(item => {
    item['parentId'] = ''
  })

  return root
}

function generatePathConfig(): RouteObject[] {
  const modules = import.meta.glob("/src/service/router/**/*.ts", { eager: true });
  let modulesList: RouteObject[] = rootRouteData(modules);


  Object.keys(modules).forEach(modulesPath => {
    if (modulesPath.indexOf('root') > -1) {
      return
    }

    const routerData = (modules[modulesPath] as any).default
    const routePath = modulesPath.replace(staticPath, '').replace('.ts', '')
    const parentId = routePath.split('/')[0]

    routerData.forEach(item => {
      item['parentId'] = parentId
    })

    modulesList = concat(modulesList, routerData)
  });

  const routerTree = arrayToTree(modulesList, 'path')

  return routerTree
}


export default generatePathConfig();



