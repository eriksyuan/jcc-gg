// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'color-base': 'text-gray-900 dark:text-gray-300',
    'bg-base': 'bg-white dark:bg-dark-100',
  },
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetIcons(),
    presetMini({
      dark: 'class',
    }),
    presetAttributify(),
  ],
})
