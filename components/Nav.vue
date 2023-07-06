<script lang="ts" setup>
const menus = [
  {
    label: '阵容',
  },
  {
    label: '英雄',
  }, {
    label: '强化符文',
  },
  {
    label: '装备',
  },
]
</script>

<template>
  <nav>
    <ul class="flex">
      <li v-for="(menu, index) in menus" :key="index">
        {{ menu.label }}
      </li>
    </ul>
  </nav>
</template>
