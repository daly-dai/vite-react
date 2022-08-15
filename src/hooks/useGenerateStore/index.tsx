import { PersistStrategy, _ActionsTree } from '@/types/storage'
import { assign } from 'lodash-es'
import { proxy } from 'valtio'

interface storeParams<T> {
  state: T
  actions: _ActionsTree
  persist: PersistStrategy[]
}

interface GenerateStore<T> {
  storeParams: T
}

const generateActions = (state, actions) => {
  const result = {}

  Object.keys(actions).forEach(key => {
    result[key] = (...args) => {
      return actions[key](...args, state)
    }
  })

  return result
}

const generateStore = ({ state, actions }) => {
  if (Object.prototype.toString.call(state) !== '[object Object]') {
    throw new Error('state object required')
  }

  if (Object.prototype.toString.call(actions) !== '[object Object]') {
    throw new Error('actions object required')
  }

  let _actions

  const result = proxy({ ...state })

  if (actions) {
    _actions = generateActions(state, actions)
  }

  return () => {
    return assign({}, result, _actions)
  }
}

export default generateStore
