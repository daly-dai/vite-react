import React, { ComponentType, lazy, Suspense } from 'react'

/**
 * 为动态 import 包裹 lazy 和 Suspense
 */
function lazyLoad(importer: () => Promise<{ default: ComponentType }>) {
  if (!importer) {
    return undefined
  }
  // 使用 React.lazy 包裹 () => import() 语法
  const Component = lazy(importer)
  // 结合 Suspense，这里可以自定义 loading 组件
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
