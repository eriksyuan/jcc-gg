import { defineStore } from 'pinia'
import type { TinyheroItem, TraitItem } from '../server/types'
import type { EquipItem, GalaxyItem, HeroItem, HexItem, JobItem, LegendItem } from '~/server/types'

function getListForMap<T = any>(map: Record<string, T>) {
  return Object.keys(map).reduce((pre, k) => {
    pre.push(map[k])
    return pre
  }, [] as T[])
}

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useDataStore = defineStore('lineup', {
  // 其他配置...
  state: () => ({
    heros: {} as Record<string, HeroItem>,
    equips: {} as Record<string, EquipItem>,
    galaxys: {} as Record<string, GalaxyItem>,
    hexs: {} as Record<string, HexItem>,
    jobs: {} as Record<string, JobItem>,
    legends: {} as Record<string, LegendItem>,
    races: {} as Record<string, JobItem>,
    tinyheros: {} as Record<string, TinyheroItem>,
    traits: {} as Record<string, TraitItem>,
  }),

  getters: {
    herolist(state) {
      return getListForMap(state.heros)
    },
  },
  actions: {
    async initData() {
      const { data } = await useFetch('/api/data')
      if (data.value) {
        this.heros = data.value.heros
        this.equips = data.value.equips
        this.galaxys = data.value.galaxys
        this.hexs = data.value.hexs
        this.jobs = data.value.jobs
        this.legends = data.value.legends
        this.races = data.value.races
        this.tinyheros = data.value.tinyheros
        this.traits = data.value.traits
      }
    },
  },
})
