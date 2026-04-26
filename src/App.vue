<script setup>
import { ref, onMounted } from 'vue'
import { fontCombinations } from '@/data/fontCombinations'
import Particles from './components/Particles.vue'
import AppButton from './components/AppButton.vue'

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
    <AppButton>Shuffle H1</AppButton>
    <div class="font-container">
      <h1></h1>
      <h2></h2>
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