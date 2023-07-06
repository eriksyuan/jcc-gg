// https://game.gtimg.cn/images/lol/act/jkzlkauto/json/lineupJson/m9/${channel}/9/lineup_detail_total.json
import { getLineuData } from '../db'
import type { LineupDetail } from '../types'

export default defineEventHandler(async () => {
  const data = await getLineuData()

  const list = data?.lineup_list

  return list?.map((l) => {
    return {
      ...l,
      detail: JSON.parse(l.detail) as LineupDetail,
    }
  })
})
