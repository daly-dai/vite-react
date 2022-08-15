export interface PersistStrategy {
  isBase?: boolean; // 是否存储到根对象
  key?: string;
  storage?: Storage;
  paths?: string[];
}

export interface PersistOptions {
  enabled: true; // 决定是否开启使用缓存
  strategies?: PersistStrategy[];
}

/**
 * @description 更新store中的缓存数据
 * @param strategy 缓存的配置项
 * @param store 当前store的对象
 * @param persistKey 缓存的名称
 */
const updateStorage = (
  strategy: PersistStrategy,
  store: Storage,
  persistKey: string
) => {
  // 如果当前没有path时  不需要做出任何改变
  if (!strategy.paths || !strategy?.paths.length) {
    return
  }

  const storage = strategy.storage || localStorage
  const storeKey = strategy.key || store.$id
  // 新增判断逻辑关于存储整体的key
  const storageProjectResult = storage.getItem(persistKey) as string
  const storageResult = JSON.parse(storageProjectResult)

  const partialState = strategy.paths.reduce((finalObj, key) => {
    // eslint-disable-next-line no-param-reassign
    finalObj[key] = store.$state[key]
    return finalObj
  }, {})

  // 如果是渲染根节点数据
  if (strategy.isBase) {
    const storeBaseData = {
      ...storageResult,
      ...partialState,
    }

    storage.setItem(persistKey, JSON.stringify(storeBaseData))
    return
  }

  // 正常按照store对象进行数据渲染
  storageResult[storeKey] = partialState
  storage.setItem(persistKey, JSON.stringify(storageResult))
}



/**
 * @description pinia 与localStorage 相互关联
 * @param context 上下文
 */
export default ({
  options,
  store,
}): void => {
  if (!options.persist?.enabled) return

  const persistKey = store.persistKey

  const defaultStart: PersistStrategy[] = [
    {
      key: store.$id,
      storage: localStorage,
    },
  ]

  const strategies = options.persist.strategies?.length
    ? options.persist.strategies
    : defaultStart

  strategies.forEach((strategy: PersistStrategy) => {
    const storageKey = strategy.key || store.$id
    const storage = strategy.storage || localStorage
    // 新增判断逻辑关于存储的key
    const storageProjectResult = storage.getItem(persistKey) as string

    // 如果不存在相关的key
    if (!storageProjectResult) {
      storage.setItem(persistKey, '{}')

      updateStorage(strategy, store, persistKey)
      return
    }

    const storageResult = JSON.parse(storageProjectResult)[storageKey]

    if (storageResult) {
      store.$patch(storageResult)
      updateStorage(strategy, store, persistKey)
    }
  })

  // 待优化点，实现单个数据的更新 避免全部更新。实现思路$subscribe api
  // watch(
  //   () => store.$state,
  //   () => {
  //     strategies.forEach((strategy: PersistStrategy) => {
  //       updateStorage(strategy, store, persistKey)
  //     })
  //   },
  //   { immediate: true, deep: true }
  // )
}