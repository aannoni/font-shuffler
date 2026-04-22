<template>
  <button class="rainbow-button" @click="$emit('click')">
    <span><slot /></span>
  </button>
</template>

<script setup>
  defineEmits(['click'])
</script>

<style scoped>
.rainbow-button {
  display: block;
  cursor: pointer;
  color: white;
  margin: 0 auto;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  padding: 1px;
  isolation: isolate;
  border: none;
  background: none;
}

.rainbow-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
  background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
  background-size: 25% 100%;
  animation: border-anim .75s linear infinite;
  animation-play-state: paused;
  translate: -5% 0%;
  transition: translate 0.25s ease-out;
}

.rainbow-button:hover::before {
  animation-play-state: running;
  transition-duration: 0.75s;
  translate: 0% 0%;
}

@keyframes border-anim {
  to { transform: translateX(-25%); }
}

.rainbow-button span {
  position: relative;
  display: block;
  padding: 0.2rem 2.2rem;
  font-size: 18px;
  background: #000;
  border-radius: 50px;
  height: 100%;
}
</style>
