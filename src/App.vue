<script setup>

</script>

<template>
  <header class="app-header">
    <img src="@/assets/font-shuffler.svg" alt="Font shuffler logo" class="font-shuffler-logo">
  </header>

  <main class="app-main">
    <button class="shuffle-button">SHUFFLE FONT</button>
  </main>
  
</template>

<style>
  .app-header {
    background-color: aquamarine;
    display: flex;
    justify-content: center;
  }

  .app-main {
    background-color: darkkhaki;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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