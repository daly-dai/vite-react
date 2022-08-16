import { PersistStore, _ActionsTree } from '@/types/storage'
import { assign, isObject } from 'lodash-es'
import { proxy, useSnapshot, subscribe } from 'valtio'

import { storePersist } from './store-persist'

interface storeParams<T> {
  state: T
  actions: _ActionsTree
  persist?: PersistStore
}

const generateActions = (state, actions) => {
  const result = {}

  Object.keys(actions).forEach(key => {
    result[key] = (...args: any) => {
      return actions[key](...args, state)
    }
  })

  return result
}


const generatePersist = (state, persist) => {
  storePersist(state, persist)
  // 订阅状态变化
  // todo 局部更新存储数据
  subscribe(state, () => {
    storePersist(state, persist)
  }
  )
}

function generateStore<T>({ state, actions, persist = null }: storeParams<T>) {
  if (!isObject(state)) {
    throw new Error('state object required')
  }

  if (!isObject(actions)) {
    throw new Error('actions object required')
  }

  let _actions

  const result = proxy({ ...(state as object) })

  // 处理函数
  if (actions) {
    _actions = generateActions(result, actions)
  }

  // 处理缓存
  if (persist) {
    generatePersist(result, persist)
  }

  return () => {
    const resultStore = useSnapshot(result)

    return assign({}, resultStore, _actions)
  }
}

export default generateStore
