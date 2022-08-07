/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy } from 'react'
import { LazyLoad } from '@components/index'

const routerConfig = [
  {
    path: `/`,
    title: '首页',
    name: "/",
    element: lazy(() => import('@pages/Main/index'))
  },
  {
    path: `login`,
    name: 'login',
    title: '登录页面',
    element: lazy(() => import('@pages/Login/index'))
  },
  {
    path: 'dashboard',
    name: "dashboard",
    title: '子路由页面',
    element: lazy(() => import('@pages/Dashboard/index')),
  }
]

export default routerConfig
