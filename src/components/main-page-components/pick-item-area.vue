<script setup lang="ts">
import NavigateTo from '@/funcs/NavigateTO.ts'
</script>

<template>
  <div class="w-full bg-black rounded-t-[115px] font-titles px-6 md:px-32 pt-10 md:pt-16 pb-10">
    <div class="flex flex-col md:flex-row justify-between gap-10 md:gap-20">

      <!--  1 -->
      <div
        @click="NavigateTo('/mobile')"
        class="flex flex-col hover:scale-[110%]  hover:-translate-y-[200px] transition-all duration-500 ease-in-out items-center">
        <span class="text-white text-lg md:text-xl mb-4 md:mb-6 font-light">
          Мобильное приложение
        </span>
        <div class="overflow-hidden max-w-[300px] w-full md:max-w-none">
          <img
            class="w-full h-auto object-cover"
            src="/img.png"
            alt="Мобильное приложение"
          />
        </div>
      </div>

      <!--  2 -->
      <div
        @click="NavigateTo('/table')"
        class="flex flex-col items-center hover:scale-[110%] hover:-translate-y-[200px] transition-all duration-500">
        <span class="text-white text-lg md:text-xl mb-4 md:mb-6 font-light">
          Табло + столовая
        </span>
        <div class="overflow-hidden max-w-[300px] w-full md:max-w-none">
          <img
            class="w-full h-auto object-cover"
            src="/img_1.png"
            alt="Табло + столовая"
          />
        </div>
      </div>

      <!--  3 -->
      <div
        @click="NavigateTo('/controller')"
        class="flex flex-col items-center hover:scale-[110%]  hover:-translate-y-[200px] transition-all duration-500">
        <span class="text-white text-lg md:text-xl mb-4 md:mb-6 font-light">
          Панель управления
        </span>
        <div class="overflow-hidden max-w-[300px] w-full md:max-w-none">
          <img
            class="w-full h-auto object-cover "
            src="/img_2.png"
            alt="Панель управления"
          />
        </div>
      </div>

    </div>
  </div>
</template>
