<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BackwardsIcon from '@/assets/backwards-icon.vue'
import NavigateTo from '@/funcs/NavigateTO.ts'

const showText = ref(false)
const animateImage = ref(false)

const section1Visible = ref(false)
const section1Ref = ref<HTMLElement | null>(null)

const section2Visible = ref(false)
const section2Ref = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    animateImage.value = true
    showText.value = true
  }, 500)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.target === section1Ref.value && entry.isIntersecting) {
          section1Visible.value = true
        }
        if (entry.target === section2Ref.value && entry.isIntersecting) {
          section2Visible.value = true
        }
      })
    },
    {
      threshold: 0.4,
    }
  )

  if (section1Ref.value) {
    observer.observe(section1Ref.value)
  }

  if (section2Ref.value) {
    observer.observe(section2Ref.value)
  }
})
</script>

<template>
  <div class="overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory h-screen">
    <section
      ref="section1Ref"
      class="w-screen h-screen flex items-center justify-center relative bg-baseBlack snap-start"
    >
      <button
        @click="NavigateTo('/')"
        v-if="showText"
        class="backwards absolute top-20 z-50 left-[120px]"
      >
        <BackwardsIcon />
      </button>

      <div class="flex w-full h-full">

        <div class="w-1/2 flex flex-col justify-center z-40 pl-32">
          <div
            v-if="showText"
            class="flex flex-col gap-8 text-white opacity-0 animate-fade-in-left"
          >
            <h1 class="text-[96px] font-titles leading-tight">Простейшее Навигирование</h1>
            <p class="text-[24px] max-w-[600px]">
              Обеспечивает табло, имеющее минималистичную, но при этом максимально реалистичную карту кампуса с подробностями о каждой аудитории
            </p>
          </div>
        </div>

        <div class="w-1/2 h-full flex items-center justify-center">
          <img
            src="/table-1-page.png"
            alt="Navigation Interface"
            class="h-[100%] object-contain transition-transform duration-1000"
            :class="{ 'translate-x-0 opacity-100': animateImage, 'translate-x-20 opacity-0': !animateImage }"
          />
        </div>
      </div>
    </section>


    <section
      ref="section2Ref"
      class="w-screen h-screen flex items-center justify-center bg-baseBlack text-white relative snap-start"
    >
      <div class="flex w-full h-full">
        <div class="w-1/2 flex items-center justify-center">
          <div
            class="phone-mockup transition-all duration-1000 ease-out"
            :class="section2Visible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'"
          >
            <img
              src="/table-2-page.png"
              alt="Food Ordering App"
              class="h-[100vh] object-contain"
            />
          </div>
        </div>

        <div class="w-1/2 h-screen items-center justify-center pr-32">
          <div
            class="flex flex-col gap-8 h-screen  justify-center text-left transition-all duration-1000 ease-out delay-200"
            :class="section2Visible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'"
          >
            <h1 class="text-[96px] font-titles">Позволяет</h1>
            <div class="text-xl leading-relaxed space-y-6">
              <p>Заказать еду в столовой из любой точки кампуса</p>
              <p>Просмотреть карту каждого этажа, описание аудиторий и поиск текущего местоположения</p>
            </div>
            <div class="mt-8">
              <button class="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:opacity-80 transition flex items-center">
                Галерея <span class="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
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

.phone-mockup {
  position: relative;
  padding: 20px;
  border-radius: 40px;
  background-color: #ffffff10;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
</style>
