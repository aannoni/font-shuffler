<script setup>
import { ref, computed, onMounted } from 'vue'
import { fontCombinations } from '@/data/fontCombinations'
import Particles from './components/Particles.vue'

const randomPick = ref(0)
const currentCombo = computed(() => fontCombinations[randomPick.value])

onMounted(() => {
  fontCombinations.forEach(combo => {
    loadGoogleFont(combo.h1Styles.fontFamily)
    loadGoogleFont(combo.h2Styles.fontFamily)
  })
})

const loadGoogleFont = (fontName) => {
  const formattedName = fontName.replace(/\s+/g, '+');
  const linkId = `google-font-${formattedName}`;
  if (!document.getElementById(linkId)) {
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap`;
    document.head.appendChild(link);
  }
}
const shuffle = () => {
  randomPick.value = (randomPick.value + 1) % fontCombinations.length;
  loadGoogleFont(currentCombo.value.h1Styles.fontFamily);
  loadGoogleFont(currentCombo.value.h2Styles.fontFamily);
}
</script>

<template>
  <Particles class="background-particles"></Particles>
  <header class="app-header">
    <img src="@/assets/font-shuffler.svg" alt="Font shuffler logo" class="font-shuffler-logo">
  </header>

  <main class="app-main">
    <button @click="shuffle" class="shuffle-button">SHUFFLE FONT</button>
    
    <div class="font-container">
      <h1 :style="{ ...currentCombo.h1Styles, fontFamily: `'${currentCombo.h1Styles.fontFamily}', serif` }">
        {{ currentCombo.h1Text }}
      </h1>
      
      <h2 :style="{ ...currentCombo.h2Styles, fontFamily: `'${currentCombo.h2Styles.fontFamily}', sans-serif` }">
        {{ currentCombo.h2Text }}
      </h2>
    </div>
  </main>
</template>

<style>
  .app-header {
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center;
  }

  .app-main {
    /* background-color: darkkhaki; */
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
  }

  .shuffle-button {
    display: inline-flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #F00;
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -1px;
    color: #F00;
    background-color: #F4F8FF;
  }

  .shuffle-button:hover {
    cursor: pointer;
  }

  .shuffle-button:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  }

  .background-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

</style>