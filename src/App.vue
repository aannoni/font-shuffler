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

const history = ref([])

const shuffleFont = async (fontRef) => {
  const fonts = await fetchGoogleFonts()
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)]
  const link = document.createElement('link')
  link.href = `https://fonts.googleapis.com/css2?family=${randomFont.replace(/ /g, '+')}&display=block`
  link.rel = 'stylesheet'
  await new Promise(resolve => {
    link.onload = resolve
    document.head.appendChild(link)
  })
  await document.fonts.load(`1em "${randomFont}"`)
  fontRef.value = randomFont
}

const shuffleH1 = () => {
  history.value.push({ target: 'h1', previousFont: h1Font.value })
  if (history.value.length > 3) history.value.shift()
  shuffleFont(h1Font)
}

const shuffleH2 = () => {
  history.value.push({ target: 'h2', previousFont: h2Font.value })
  if (history.value.length > 3) history.value.shift()
  shuffleFont(h2Font)
}

const goBack = () => {
  const last = history.value.pop()
  if (last.target === 'h1') {
    h1Font.value = last.previousFont
  } else {
    h2Font.value = last.previousFont
  }
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
      <AppButton @click="goBack" :disabled="history.length === 0">Reverse</AppButton>
    </div>
    <div class="font-container">
      <h1 :style="{ fontFamily: h1Font }">Do you like time?</h1>
      <h2 :style="{ fontFamily: h2Font }">Time is passing while you're reading this.</h2>
    </div>
  </main>
</template>

<style>
  h1 {
    font-size: clamp(42px, 7vw, 92px);
  }

  h2 {
    font-size: clamp(18px, 2.5vw, 32px);
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
    width: 100%;
    max-width: 1200px;
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

  @media (max-width: 620px) {
  .button-group {
    flex-direction: column;
    row-gap: 12px;
    }
  } 

</style>