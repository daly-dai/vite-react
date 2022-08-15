import React from 'react'
import placeStore from '@/store/placeStore'
// import { useSnapshot } from 'valtio'

import { proxy, useSnapshot } from 'valtio'

type Status = 'pending' | 'completed'
type Filter = Status | 'all'
type Todo = {
  description: string
  status: Status
  id: number
}

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: 'all',
  todos: []
})

const Main = () => {
  // // const store = useSnapshot(placeStore)
  // console.log(placeStore, store, 888)
  // const snap = useSnapshot(store)
  const store = placeStore()

  return (
    <>
      首页
      {store.filter}
      {store.healthCode.colorCode}
    </>
  )
}

export default Main
