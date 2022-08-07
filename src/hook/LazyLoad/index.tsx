import React, { Suspense } from 'react'
import { Spin } from 'antd'
// 懒加载
function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      }
    >
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
