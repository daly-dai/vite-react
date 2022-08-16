import React, { useEffect } from 'react'
import placeStore from '@/store/placeStore'
import { proxy, subscribe } from 'valtio'
// import { useSnapshot } from 'valtio'

const Main = () => {
  const store = placeStore()

  const state = proxy({ obj: { foo: 'bar' }, arr: ['hello'] })

  subscribe(state.obj, () => console.log('state.obj has changed to', state.obj))

  useEffect(() => {
    setTimeout(() => {
      state.obj.foo = 'baz'
      store.changeUiStyle('test')
    }, 5000)
  }, [])

  return (
    <>
      首页
      {store.uiStyle}
    </>
  )
}

export default Main
