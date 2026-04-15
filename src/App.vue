<script setup>
  import { ref, computed } from 'vue'

  const fontCombinations = [
    {
      id: 1,
      h1Font: "'Playfair Display', serif",
      h2Font: "'Rethink Sans', sans-serif",
      color: "#0047FF"
    },
    {
      id: 2,
      h1Font: "'Montserrat', sans-serif",
      h2Font: "'Lora', serif",
      color: "#FF3B30"
    },
  ]

  const randomPick = ref(0)

  const currentCombo = computed(() => fontCombinations[randomPick.value])

  const shuffle = () => {
  randomPick.value = (randomPick.value + 1) % fontCombinations.length
  }
</script>

<template>
  <header class="app-header">
    <img src="@/assets/font-shuffler.svg" alt="Font shuffler logo" class="font-shuffler-logo">
  </header>

  <main class="app-main">
    <button @click="shuffle" class="shuffle-button">SHUFFLE FONT</button>
    <div class="font-container">
      <h1 :style="{ fontFamily: currentCombo.h1Font, color: currentCombo.color }">CONTEMPORARY DANCE EVENING</h1>
      <h2 :style="{ fontFamily: currentCombo.h2Font, color: currentCombo.color }">Choreography exploring rhythm, tension and release</h2>
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
    height: 100vh;
    flex-direction: column;
  }

  .font-container {
    width: 90%;
    max-width: 800px;
    border: 1px solid #D1D9E6; /* The thin guide lines */
    padding: 80px 40px;
    text-align: center;
    background-color: white;
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