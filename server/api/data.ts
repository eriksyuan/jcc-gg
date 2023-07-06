// https://game.gtimg.cn/images/lol/act/jkzlkauto/json/lineupJson/m9/${channel}/9/lineup_detail_total.json
import { getEquip, getGalaxy, getHero, getHex, getJob, getLegend, getRace, getTinyhero, getTrait } from '../db'

export default defineEventHandler(async () => {
  const [
    equips,
    galaxys,
    heros,
    hexs,
    jobs,
    legends,
    races,
    tinyheros,
    traits,
  ] = await Promise.all([
    getEquip(),
    getGalaxy(),
    getHero(),
    getHex(),
    getJob(),
    getLegend(),
    getRace(),
    getTinyhero(),
    getTrait(),
  ])

  return {
    equips: equips?.data,
    galaxys: galaxys?.data,
    heros: heros?.data,
    hexs: hexs?.data,
    jobs: jobs?.data,
    legends: legends?.data,
    races: races?.data,
    tinyheros: tinyheros?.data,
    traits: traits?.data,
  }
})
