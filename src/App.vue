<script setup>
import { ref, onMounted } from 'vue'
import { fontCombinations } from '@/data/fontCombinations'
import { fetchGoogleFonts } from './data/googleFonts'
import Particles from './components/Particles.vue'
import AppButton from './components/AppButton.vue'

const h1Font = ref('')
const h2Font = ref('')

const shuffleFont = async (fontRef) => {
  const fonts = await fetchGoogleFonts()
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)]
  const link = document.createElement('link')
  link.href = `https://fonts.googleapis.com/css2?family=${randomFont.replace(/ /g, '+')}&display=swap`
  link.rel = 'stylesheet'
  document.head.appendChild(link)
  fontRef.value = randomFont
}

const shuffleH1 = () => shuffleFont(h1Font)
const shuffleH2 = () => shuffleFont(h2Font)

onMounted(async () => {
  console.log('wow this is working')
})
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
    </div>
    <div class="font-container">
      <h1 :style="{ fontFamily: h1Font }">Heading One</h1>
      <h2 :style="{ fontFamily: h2Font }">Heading Two</h2>
    </div>
  </main>
</template>

<style>
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
    width: 720px;
    height: 420px;
    border: 1px solid #D1D9E6; /* The thin guide lines */
    padding: 30px 30px;
    margin-bottom: 50px;
      color: #ffffff;

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