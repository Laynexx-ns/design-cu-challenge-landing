<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BackwardsIcon from '@/assets/backwards-icon.vue'
import NavigateTo from '@/funcs/NavigateTO.ts'

const showContent = ref(false)
const imageLoaded = ref(false)

onMounted(() => {
  // Simulate image loading
  setTimeout(() => {
    imageLoaded.value = true

    // Show content after image appears
    setTimeout(() => {
      showContent.value = true
    }, 500)
  }, 500)
})
</script>

<template>
  <div class="w-screen h-screen overflow-hidden bg-baseBlack relative">

    <button
      @click="NavigateTo('/')"
      v-if="showContent"
      class="backwards absolute top-20 left-[120px] z-40"
    >
      <BackwardsIcon />
    </button>


    <div class="flex h-full w-full">

      <div class="w-1/2 flex flex-col justify-center pl-32 z-10">
        <div
          v-if="showContent"
          class="flex flex-col gap-8 text-white opacity-0 animate-fade-in-left"
        >
          <h1 class="text-[96px] font-titles leading-tight">
            Минимализм<br />и удобство
          </h1>
          <p class="text-[24px] max-w-[600px]">
            Предлагает современная и функциональная панель управления состоянием в комнате
          </p>
        </div>
      </div>

      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <div class="w-full h-full relative">

          <div
            class="w-full h-full transition-opacity duration-1000"
            :class="{ 'opacity-100': imageLoaded, 'opacity-0': !imageLoaded }"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-baseBlack via-baseBlack/90 to-baseBlack/30"></div>
            <img
              src="/controller-1-page.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>


          <div
            v-if="imageLoaded"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 delay-300"
            :class="{ 'opacity-100 translate-x-0': showContent, 'opacity-0 translate-x-20': !showContent }"
          >
            <div class="relative">
              <img
                src="/controller-2-page.png"
                alt="Tablet screen with QR code"
                class="max-h-[500px] mr-40 object-contain"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInLeft {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInRight {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out forwards;
  animation-delay: 0.2s;
}

.animate-fade-in-right {
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 0.4s;
}

@keyframes fadeInLeftButton {
  0% {
    transform: translateX(-500px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.backwards {
  opacity: 0;
  animation: fadeInLeftButton 1s ease-out forwards;
  animation-delay: 0.5s;
}
</style>
