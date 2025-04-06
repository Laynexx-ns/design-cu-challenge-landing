<script setup lang="ts">
import CuIcon from '@/assets/cu-icon.vue'
</script>

<template>
  <div class="w-full h-[60px] md:h-[100px] flex font-titles items-center justify-between px-4 md:px-20 bg-baseBlack">
    <div class="w-6 h-6 md:w-10 md:h-10">
      <CuIcon/>
    </div>
    <div class="flex-1 flex justify-center gap-4 md:gap-20">
      <button class="text-white text-sm md:text-xl font-light">
        Design файл
      </button>
      <button class="text-white text-sm md:text-xl font-light">
        FigJam файл
      </button>
      <button class="text-white text-sm md:text-xl font-light">
        Итоговая оценка
      </button>
      <button class="text-white text-sm md:text-xl font-light">
        Автор
      </button>
    </div>
  </div>
</template>
