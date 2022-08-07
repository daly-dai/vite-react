import path from 'path'
import { keys } from 'lodash-es'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

function setAlias(alias) {
  const result = {}

  keys(alias).forEach(key => {
    result[key] = _resolve(alias[key])
  })

  return result
}

export { setAlias }
