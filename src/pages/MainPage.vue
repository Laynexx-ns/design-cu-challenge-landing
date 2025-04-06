<script setup lang="ts">
import HeaderTab from '@/components/main-page-components/header-tab.vue'
import PickItemArea from '@/components/main-page-components/pick-item-area.vue'
</script>

<template>
  <div class="bg-baseBlack overflow-hidden h-screen gap-[10vh] flex flex-col">
    <HeaderTab class="p-4 md:p-8" />


    <div class="flex-1 flex flex-col items-center text-center mt-10 md:mt-20 mb-8 md:mb-16 px-4">
      <h1 class="text-5xl md:text-[128px] font-titles leading-none text-white">
        uniCU
      </h1>
      <span class=" font-paragraph text-base md:text-xl text-white mt-4">
        единая система взаимодействия с кампусом Центрального университета
      </span>

      <button class="mt-8 font-titles px-8  py-4 text-baseBlack bg-baseWhite rounded-2xl">Скачать мобильное приложение</button>
    </div>

    <PickItemArea />
  </div>
</template>
