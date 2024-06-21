<script setup lang="ts">
</script>

<template>
  <div id="app">
    <nav>
    <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/drag-drop">Go to Drag and Drop</RouterLink>
      <RouterLink to="/horario">Go to Drag and Drop</RouterLink>
</nav>
   <router-view class="bg-black">
  </router-view>
</div>

</template>

<style scoped>
#app {
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
}


nav {
  width: 100%;
  padding: 10px 0;
  text-align: center;
  position: sticky; /* Añade posicionamiento sticky para mantenerlo visible al hacer scroll */
  top: 0; 
}

</style>
