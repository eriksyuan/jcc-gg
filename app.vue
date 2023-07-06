<script lang="ts" setup>
import { useDataStore } from './store/data'

const dataStore = useDataStore()

dataStore.initData()
</script>

<template>
  <div class="min-h-screen bg-base">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
