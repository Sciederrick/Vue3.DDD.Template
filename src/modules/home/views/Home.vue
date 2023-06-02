<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./../components/HelloWorld.vue";

const msg = ref("Using a counter to demonstrate testing with vitest");
</script>

<template>
  <section class="card">
    <h1 class="heading-1 text-gradient text-center">
      Domain Driven Design Template
    </h1>
    <div class="card-body">
      <p>
        This template follows Domain Driven Design with the following
        integrations:
      </p>
      <ul class="list-disc list-inside">
        <li>TailwindCSS for styling</li>
        <li>Scaffolding with Vite</li>
        <li>Data management with Pinia</li>
        <li>Unit and Component testing with Vitest</li>
        <li>Prettier for automatic code formatting</li>
      </ul>
    </div>
    <HelloWorld :msg="msg" />
  </section>
</template>
