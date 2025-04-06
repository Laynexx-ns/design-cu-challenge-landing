<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BackwardsIcon from '@/assets/backwards-icon.vue'
import NavigateTo from '@/funcs/NavigateTO.ts'

const videoRef = ref<HTMLVideoElement | null>(null)
const showText = ref(false)
const animateVideo = ref(false)

const sectionVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {

  if (videoRef.value) {
    videoRef.value.play()
  }

  setTimeout(() => {
    animateVideo.value = true
    showText.value = true
  }, 4000)

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sectionVisible.value = true
      }
    },
    {
      threshold: 0.4,
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <div class="overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory h-screen">
    <!-- 1 screen -->
    <section
      class="w-screen h-screen flex items-center justify-center relative bg-baseBlack snap-start"
    >
      <button
        @click="NavigateTo('/')"
        v-if="showText"
        class="backwards absolute top-20 left-[120px]"
      >
        <BackwardsIcon />
      </button>

      <video
        ref="videoRef"
        src="/iphone-animation.mp4"
        class="absolute top-0 h-screen transition-transform duration-1000"
        :class="{ 'translate-x-1/3': animateVideo }"
        autoplay
        muted
        playsinline
      />

      <div
        v-if="showText"
        class="absolute left-32 flex flex-col gap-20 text-white text-4xl opacity-0 animate-fade-in-left"
      >
        <h1 class="text-[128px] font-titles">Единый вход</h1>
        <span class="text-[36px]">
          во все необходимые функции в одном приложении
        </span>
      </div>
    </section>

    <!-- second screen -->
    <section

      ref="sectionRef"
      class="w-screen h-screen flex items-center justify-center bg-baseBlack text-white relative px-16 snap-start"
    >
      <img
        src="/phone-2-page.png"
        class="h-[100%] object-contain transition-all duration-1000 ease-out"
        :class="sectionVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'"
        alt="Phone Preview"
      />

      <div
        class="ml-20 max-w-[600px] transition-all duration-1000 ease-out delay-200"
        :class="sectionVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'"
      >
        <h1 class="text-[64px] font-titles mb-6">Упрощает</h1>
        <ul class="text-xl leading-relaxed mb-8">
          <li>1. Навигирование по кампусу</li>
          <li>2. Просмотр расписания, домашних заданий и лонгридов</li>
          <li>3. Взаимодействие с аудиториями</li>
          <li>4. Изучение истории здания</li>
          <li>5. Оповещение о событиях</li>
        </ul>
        <button class="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:opacity-80 transition">
          Галерея →
        </button>
      </div>
    </section>
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


@keyframes slideInLeft {
  0% {
    transform: translateX(-80px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(80px);
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

.animate-slide-in-left {
  animation: slideInLeft 1s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 1s ease-out forwards;
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
