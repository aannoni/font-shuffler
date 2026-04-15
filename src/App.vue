<script setup>
import { ref, computed } from 'vue'
import { fontCombinations } from '@/data/fontCombinations'

const randomPick = ref(0)
const currentCombo = computed(() => fontCombinations[randomPick.value])

// The logic to inject the font into the HTML head
const loadGoogleFont = (fontName) => {
  const formattedName = fontName.replace(/\s+/g, '+');
  const linkId = `google-font-${formattedName}`;

  // If we haven't added this font to the page yet, add it!
  if (!document.getElementById(linkId)) {
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@400;700&display=swap`;
    document.head.appendChild(link);
  }
}

const shuffle = () => {
  randomPick.value = (randomPick.value + 1) % fontCombinations.length;
  
  // Every time we shuffle, tell the browser to load the new fonts
  loadGoogleFont(currentCombo.value.h1Styles.fontFamily);
  loadGoogleFont(currentCombo.value.h2Styles.fontFamily);
}
</script>

<template>
  <header class="app-header">
    <img src="@/assets/font-shuffler.svg" alt="Font shuffler logo" class="font-shuffler-logo">
  </header>

  <main class="app-main">
    <button @click="shuffle" class="shuffle-button">SHUFFLE FONT</button>
    
    <div class="font-container">
      <h1 :style="currentCombo.h1Styles">
        {{ currentCombo.h1Text }}
      </h1>
      
      <h2 :style="currentCombo.h2Styles">
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
    width: 840px;
    height: 420px;
    border: 1px solid #D1D9E6; /* The thin guide lines */
    padding: 0px 30px;
    background-color: white;
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
</style>