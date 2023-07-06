<script lang="ts" setup>
import { useDataStore } from '../store/data'

const props = withDefaults(defineProps<{
  id: string
  equips?: string
  level?: number
  size?: number
}>(), {
  equips: '',
  level: 1,
  size: 60,
})

const dataStore = useDataStore()

const hero = computed(() => {
  return dataStore.heros[props.id]
})

const localEquips = computed(() => {
  return props.equips.split(',').filter(Boolean).map(id => dataStore.equips[id])
})
</script>

<template>
  <div class="relative pb-1">
    <nuxt-img :height="size" :width="size" class="overflow-hidden rounded-6" loading="lazy" :src=" hero.picture" />
    <div class="absolute bottom-0 flex">
      <div v-for="eq in localEquips" :key="eq.id">
        <EquipItem :id="eq.id" :size="size / 3" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
