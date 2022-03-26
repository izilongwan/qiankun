import { ICommonObject } from '../typings'

export function getUrlParams(key = '', location = window.location) {
  const query = location.search.slice(1)

  const arr = query.split('&')

  const map = arr.reduce((p, c) => {
    const [k, v] = c.split('=')

    p[k] = p[k] ?? []
    p[k].push(decodeURIComponent(v))

    return p
  }, <ICommonObject>{})

  return key ? map[key] : map
}
