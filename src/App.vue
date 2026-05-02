<script setup>
import { ref, onMounted } from 'vue'
import { fontCombinations } from '@/data/fontCombinations'
import { fetchGoogleFonts } from './data/googleFonts'
import Particles from './components/Particles.vue'
import AppButton from './components/AppButton.vue'

onMounted(async () => {
  console.log('wow this is working')
})

const h1Font = ref('')
const h2Font = ref('')

const lastChange = ref(null)

const shuffleFont = async (fontRef) => {
  const fonts = await fetchGoogleFonts()
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)]
  const link = document.createElement('link')
  link.href = `https://fonts.googleapis.com/css2?family=${randomFont.replace(/ /g, '+')}&display=swap`
  link.rel = 'stylesheet'
  document.head.appendChild(link)
  fontRef.value = randomFont
}

const shuffleH1 = () => {
  lastChange.value = { target: 'h1', previousFont: h1Font.value }
  shuffleFont(h1Font)
}

const shuffleH2 = () => {
  lastChange.value = { target: 'h2', previousFont: h2Font.value }
  shuffleFont(h2Font)
}

const goBack = () => {
  if (lastChange.value.target === 'h1') {
    h1Font.value = lastChange.value.previousFont
  } else {
    h2Font.value = lastChange.value.previousFont
  }
  lastChange.value = null
}


</script>

<template>
  <Particles class="background-particles"></Particles>
  <header class="app-header">
    <img src="@/assets/FontVerse.svg" alt="Fontverse logo" class="font-shuffler-logo">
  </header>

  <main class="app-main">
    <div class="button-group">
      <AppButton @click="shuffleH1">Shuffle H1</AppButton>
      <AppButton @click="shuffleH2">Shuffle H2</AppButton>
      <AppButton @click="goBack" :disabled="lastChange === null">Go back</AppButton>
    </div>
    <div class="font-container">
      <h1 :style="{ fontFamily: h1Font }">Do you like time?</h1>
      <h2 :style="{ fontFamily: h2Font }">Time is passing while you're reading this.</h2>
    </div>
  </main>
</template>

<style>
  h1 {
    font-size: 92px;
  }

  h2 {
    font-size: 32px;
  }

  .app-header {
    display: flex;
    justify-content: center;
  }

  .app-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 130px);
    flex-direction: column;
    row-gap: 12px;
  }

  .font-container {
    width: 1200px;
    height: 400px;
    padding-top: 50px;
    color: #ffffff;
    text-align: center;
  }

  .background-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .button-group {
    display: flex;
    column-gap: 12px;
  }

</style>