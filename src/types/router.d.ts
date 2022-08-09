import React from 'react';


//meta规则
export interface MetaRule {
  auth?: boolean, //是否需要登录验证
  title?: string, //页面title
  [name: string]: string | boolean, //其他参数
}


// router定义
export interface RouteObject {
  caseSensitive?: boolean; // 大小写敏感
  children?: RouteObject[]; // 子路由
  element?: React.ReactNode; // 组件
  index?: boolean; // 在子路由中，默认为父级路由的首页
  path?: string; // URL 路径
  name?: string; // 当前路由的唯一标识，用于路由拼接
  parentId?: string | number; // 序列化路由时用
  redirect?: string; //重定向地址 ，常用于设置页面默认地址
  meta: MetaRule
}

// 路由守卫
interface onRouteBeforeRule<meta = MetaRule, to = string> {
  (meta: meta, to: to): any | never
}


type LoadingEleRule = React.ReactNode

interface GuardRule {
  routers: RouteObject[]
  onRouterBefore?: onRouteBeforeRule
  loading?: LoadingEleRule
}


interface FunctionRule {
  (): any
}