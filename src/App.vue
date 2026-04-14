<script setup>
import { ref, computed } from 'vue'

// 1. This is where your data structure (Step 1) will go
const fontSets = [
  {
    id: 1,
    fontFamily: "'Playfair Display', serif",
    name: "Classic Serif"
  },
  {
    id: 2,
    fontFamily: "'Montserrat', sans-serif",
    name: "Modern Sans"
  }
]

const currentIndex = ref(0)
const currentSet = computed(() => fontSets[currentIndex.value])

const shuffle = () => {
  currentIndex.value = (currentIndex.value + 1) % fontSets.length
}
</script>

<template>
  <div class="app-container">
    <header>
      <h1 class="logo">Font <span class="red">Shuffler</span></h1>
    </header>

    <main>
      <button @click="shuffle" class="shuffle-btn">SHUFFLE FONT</button>

      <div class="preview-card">
        <div class="guide-box">
           <h2 :style="{ fontFamily: currentSet.fontFamily }">
             CONTEMPORARY DANCE EVENING
           </h2>
           <p>Choreography exploring rhythm, tension and release</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
/* Basic reset to help match your white/minimalist design */
body {
  margin: 0;
  background-color: #f8faff; /* Light blueish tint from your image */
  font-family: sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.logo {
  color: #333;
  font-size: 2rem;
}

.red {
  color: #ff3b30; /* Red from your logo */
}

.shuffle-btn {
  background: transparent;
  border: 1px solid #ff3b30;
  color: #ff3b30;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 2rem 0;
}

.preview-card {
  width: 80%;
  max-width: 800px;
  border: 0.5px solid #ccc; /* The thin guide lines */
  padding: 100px 50px;
  text-align: center;
}

h2 {
  font-size: 4rem;
  color: #0047ff; /* Blue from your image */
  margin: 0;
}
</style>