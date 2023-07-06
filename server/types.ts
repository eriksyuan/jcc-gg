export interface LineupList {
  id: string
  pid: string
  bid: string
  author: string
  status: string
  lineupauthor_data: LineupauthorData
  channel: string
  quality: Quality
  sortID: string
  rel_time: Date
  sub_time: Date
  edition: string
  season: string
  simulator_edition: string
  simulator_season: string
  like: string
  video_author_uuid: string
  detail: string
  mode: string
  mode_type: string
}

export interface LineupDetail {
  lineup_skin_hero: string
  lineup_video_docid: string
  line_name: string
  lineup_type: string
  line_feature: string
  line_tag: string
  author_littlelegend: {
    id: string
    group: string
    desc: string
    series: string
    item_name: string
    isShow: string
    level: string
    picture: string
    quality: string
    resourceCloseTime: string
    resourceOpenTime: string
  }
  hero_location: {
    chess_type: 'hero'
    equipment_id: string
    hero_id: string
    location: string
    zkcatch: boolean
    location_2: string
    is_carry_hero: boolean
  }[]
  y21_early_heros: {
    chess_type: 'hero'
    equipment_id: string
    hero_id: string
    location: string
    zkcatch: boolean
  }[]
  y21_metaphase_heros: {
    chess_type: 'hero'
    equipment_id: string
    hero_id: string
    location: string
    zkcatch: boolean
  }[]
  contact: {
    color: number
    id: string
    level: number
    type: 'job' | 'race'
    num: number
  }[]
  y21_early_heros_contact: {
    color: number
    id: string
    level: number
    type: 'job' | 'race'
    num: number
  }[]
  y21_metaphase_heros_contact: {
    color: number
    id: string
    level: number
    type: 'job' | 'race'
    num: number
  }[]
  hexbuff: {
    recomm: string
    replace: string
  }
  level_3_heros: string
  hero_replace: any[]
  hex_info: string
  legendgalaxyinfo: string
  early_info: string
  d_time: string
  equipment_info: string
  location_info: string
  location_info_2: string
  enemy_info: string
  early_round: string
  metaphase_round: string
  equipment_order: string
  carry_hero_equip_replace: {
    main: string
    backup: string
  }
  legendlist: string[]
  galaxylist: string[]
}

export enum Quality {
  A = 'A',
  S = 'S',
}

export interface LineupauthorData {
  id: string
  authorId: string
  name: string
  platId: string
  gender: string
  qq: string
  uuid: string
  introduce?: string
  imgUrl: string
  status: string
  isDelete: string
  updateTime: Date
  updateMan: string
  creater: string
  createTime: Date
  plat_anchor_uid: string
  room_number: string
}

export interface VersionData {
  version_start_time: Date
  version: string
  season: string
  is_newest_version: number
  mode: string
  name: string
  raceurl: string
  joburl: string
  herourl: string
  legendurl: string
  galaxyurl: string
  hexurl: string
  equipurl: string
  tinyherourl: string
  traiturl: string
  configurl: string
}

export interface SetResponese<T> {
  version: string
  season: string
  setId: string
  time: Date
  data: { [key: string]: T }
}

export interface GalaxyItem {
  id: string
  name: string
  desc: string
  logo: string
  video: string
  bgImage: string
  country: string
}

export type Galaxy = SetResponese<GalaxyItem>

export interface LegendItem {
  id: string
  name: string
  name2: string
  desc: string
  icon: string
  picture: string
  weight: string
  detail: string
  hacIds: HacID[]
}

export interface HacID {
  id: string
  turn: string
}

export type Legend = SetResponese<LegendItem>

export type Hero = SetResponese<HeroItem>
export interface HeroItem {
  id: string
  armor: string
  attackRange: string
  attackSpeed: string
  buyPrice: string
  class: string
  criticalStrikeChance: string
  heroPaint: string
  heroType: string
  initAttackDamage: string
  initHP: string
  initMP: string
  magicResist: string
  maxMP: string
  name: string
  picture: string
  sellPrice: string
  price: string
  setid: string
  showHeroTag: string
  skillBriefValue: string
  skillDesc: string
  skillIcon: string
  skillName: string
  skillValueDesc: string
  species: string
  tftHeroId: string
}

export interface EquipItem {
  id: string
  basicDesc: string
  desc: string
  EffectType: string
  fetterID: string
  icon: string
  name: string
  picture: string
  planID: string
  synthesis1: string
  synthesis2: string
  tftEquipId: string
  type: EquipType
}

export type EquipType = '基础装备' | '成型装备' | '特殊装备'

export type Equip = SetResponese<EquipItem>

export interface TraitItem {
  id: number
  checkId: string
  name: string
  type: number
  color: string
  level: number
  maxLevel: string
  num: string
  numList: string
  values: string
  picture: string
  prefix: string
  desc: string
  desc2: string
  realDesc: string
  setid: string
}

export type Trait = SetResponese<TraitItem>

export interface TinyheroItem {
  id: string
  group: string
  desc: string
  series: string
  item_name: string
  isShow: string
  level: string
  picture: string
  quality: string
  resourceCloseTime: string
  resourceOpenTime: string
}

export type Tinyhero = SetResponese<TinyheroItem>

export interface JobItem {
  id: string
  name: string
  color: string
  desc2: string
  maxLevel: string
  numList: string
  picture: string
  prefix: string
  setID?: string
  tftClassId?: string
  setid?: string
  tftSpecId?: string
}

export type Job = SetResponese<JobItem>

export interface HexItem {
  id: string
  desc: string
  icon: string
  name: string
  level: string
  is_legend: number
  hero_enhancement_type: string
  fetterId: string
  fetterType: string
}

export type Hex = SetResponese<HexItem>

export interface Datas {
  equip: Equip
  legend: Legend
  hero: Hero
  galaxy: Galaxy
  hex: Hex
  job: Job
  race: Job
  tinyhero: Tinyhero
  trait: Trait
}

export type DataTypeKeys = keyof Datas
