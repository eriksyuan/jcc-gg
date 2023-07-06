import fetch from 'node-fetch'
import type { StorageValue } from 'unstorage'
import { jsBaseUrl, lineupUrl, versionDataUrl } from './config'
import type { DataTypeKeys, Datas, LineupList, VersionData } from './types'

export interface LineUp {
  lineup_list: any[]
}

async function request<T = any>(url: string) {
  const res = await fetch(url)
  return res.json() as T
}

async function setLineUpData() {
  const data = await request<LineUp>(lineupUrl)
  await useStorage('db').setItem('lineup', data)
}

export async function getLineuData() {
  return useStorage('db').getItem<{
    lineup_list: LineupList[]
  }>('lineup')
}

async function setVersionData() {
  const data = await request<VersionData[]>(`${versionDataUrl}?ts=${Date.now() / 1000}`)
  await useStorage('db').setItem('versions', data)
}

async function getLatestVersionData() {
  const versions = await useStorage('db').getItem<VersionData[]>('versions')
  return versions ? versions[versions.length - 1] : null
}

function getJsUrl(url: string) {
  return `${jsBaseUrl}${url}`
}

async function setData<T extends StorageValue>(key: string, fetchUrl: string) {
  const url = getJsUrl(fetchUrl)
  const data = await request(url) as T
  return useStorage('db').setItem(key, data)
}

async function getData<T extends DataTypeKeys>(key: T) {
  return useStorage('db').getItem<Datas[T]>(key)
}

function getDataFunc<T extends DataTypeKeys>(key: T) {
  return async () => {
    return getData(key)
  }
}

export async function getItemById(key: DataTypeKeys, id: string) {
  const hero = await getData(key)
  return hero?.data[id]
}

function getItemByIdFunc(key: DataTypeKeys) {
  return async (id: string) => {
    return getItemById(key, id)
  }
}

export const getGalaxy = getDataFunc('galaxy')
export const getGalaxyById = getItemByIdFunc('galaxy')

export const getLegend = getDataFunc('legend')
export const getLegendById = getItemByIdFunc('legend')

export const getHero = getDataFunc('hero')
export const getHeroById = getItemByIdFunc('hero')

export const getEquip = getDataFunc('equip')
export const getEquipById = getItemByIdFunc('equip')

export const getTrait = getDataFunc('trait')
export const getTraitById = getItemByIdFunc('trait')

export const getTinyhero = getDataFunc('tinyhero')
export const getTinyheroById = getItemByIdFunc('tinyhero')

export const getJob = getDataFunc('job')
export const getJobById = getItemByIdFunc('job')

export const getHex = getDataFunc('hex')
export const getHexById = getItemByIdFunc('hex')

export const getRace = getDataFunc('race')
export const getRaceById = getItemByIdFunc('race')

export async function setInitData() {
  await Promise.all([
    setLineUpData(),
    setVersionData(),
  ])

  const last = await getLatestVersionData()
  if (last) {
    const urlKeys: Array<keyof VersionData> = [
      'equipurl',
      'galaxyurl',
      'herourl',
      'hexurl',
      'joburl',
      'legendurl',
      'raceurl', 'tinyherourl', 'traiturl',
    ]

    Promise.all(urlKeys.map(async (k) => {
      const strogeKey = k.slice(0, -3)
      await setData(strogeKey, last[k] as string)
    }),
    )
  }
}
