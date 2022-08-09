import { onRouteBeforeRule } from '@/types/router'

const onRouteBefore: onRouteBeforeRule = (meta, to) => {
  const { auth, title } = meta
  if (title) {
    // 动态修改页面title
    document.title = title || '统一中心管理'
  }
  console.log('to', to)
  return to
  // token权限验证
  // return (auth && !localStorage('access_token')) ? '/login' : to;
}

export default onRouteBefore
