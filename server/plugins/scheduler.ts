import { setInitData } from '../db'
import { useScheduler } from '#scheduler'

export default defineNitroPlugin(() => {
  setInitData()
  startScheduler()
})

function startScheduler() {
  const scheduler = useScheduler()

  scheduler.run(() => {
    // getData()
  }).everyMinutes(10)
  // create as many tasks as you want here
}
