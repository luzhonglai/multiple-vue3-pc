/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-07 15:35:43
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-05-08 10:08:22
 */
// import ParentLayout from '_c/ParentView/index.vue'
import { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router'

export const getParentLayout = (name: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        // ...ParentLayout,
        name
      })
    })
}

export function getRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  if (!route) return route
  const { matched, ...opt } = route
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path
        }))
      : undefined) as RouteRecordNormalized[]
  }
}
