<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h2 class="py-8">{{ msg }}</h2>
  <button class="px-3 py-2 bg-blue-700 hover:bg-blue-900 text-white" @click="count++">count is {{ count }}</button>
</template>
