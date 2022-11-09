<template>
  <button v-bind="$attrs" class="dclyde-block-button" @click.stop="emit('buttonClick')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'buttonClick'): void;
}>();
</script>

<style lang="postcss">
.dclyde-block-button {
  @apply bg-blue-500 rounded px-3 py-1 text-white font-medium hover:cursor-pointer hover:scale-105 transition-all active:scale-100 transform-gpu hover:shadow-md disabled:transition-none disabled:scale-100 disabled:opacity-70 disabled:cursor-auto disabled:shadow-none;
}
</style>
