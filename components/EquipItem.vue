<script lang="ts" setup>
import { useDataStore } from '../store/data'

const props = withDefaults(defineProps<{
  id: string
  size?: number
}>(), {
  size: 50,
})

const dataStore = useDataStore()

const imageUrl = computed(() => {
  return dataStore.equips[props.id]?.picture
})
</script>

<template>
  <nuxt-img :width="size" :height="size" :src="imageUrl" />
</template>
