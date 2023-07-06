<script lang="ts" setup>
import { useDataStore } from '../store/data'

const { data: lineups } = await useFetch('/api/lineup')

const dataStore = useDataStore()
</script>

<template>
  <div>
    <div v-for="lineup in lineups" :key="lineup.id">
      <div>
        {{ lineup.quality }}
      </div>
      <div class="flex">
        <div v-for="hero in lineup.detail.hero_location" :key="hero.hero_id">
          <HeroItem :id="hero.hero_id" :equips="hero.equipment_id" />
        </div>
      </div>
    </div>
  </div>
</template>
