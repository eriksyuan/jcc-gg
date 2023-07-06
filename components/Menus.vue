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
  <div class="h-12 w-full flex">
    <HeadlessMenu>
      <HeadlessMenuButton v-for="(menu, index) in menus" :key="index" class="color-base flex-grow-1 cursor-pointer rounded text-center text-sm hover:text-gray dark:hover:text-white">
        <div>
          {{ menu.label }}
        </div>
      </HeadlessMenuButton>
    </HeadlessMenu>
  </div>
</template>
