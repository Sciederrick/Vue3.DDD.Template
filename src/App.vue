<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="pt-4 pb-8 text-center limit-width">
      <router-link 
        class="link"
        to="/">Home Module</router-link> |
      <router-link 
        class="link"
        to="/hello">Hello Module</router-link> |
      <router-link 
        class="link"
        to="/world">World Module</router-link>
    </nav>
  </header>
  <main>
    <router-view :key="$route.path"/>
  </main>
</template>

