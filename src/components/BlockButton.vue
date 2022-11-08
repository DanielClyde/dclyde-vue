<template>
  <button
    class="bg-blue-500 rounded px-3 py-1 text-white font-medium hover:cursor-pointer hover:scale-105 transition-all active:scale-100 transform-gpu hover:shadow-md"
    @click.stop="emit('buttonClick')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'buttonClick'): void;
}>();
</script>

<style scoped></style>
