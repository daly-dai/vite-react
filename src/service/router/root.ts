const routerConfig = [
  {
    path: `/`,
    title: '首页',
    name: "/",
    element: () => import('@pages/Main/index')
  },
  {
    path: `login`,
    name: 'login',
    title: '登录页面',
    element: () => import('@pages/Login/index')
  },
  {
    path: 'dashboard',
    name: "dashboard",
    title: '子路由页面',
    element: () => import('@pages/Dashboard/index')
  }
]

export default routerConfig
