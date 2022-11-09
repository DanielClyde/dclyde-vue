<template>
  <button class="dclyde-block-button" @click.stop="emit('buttonClick')" v-bind="$attrs">
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
  @apply bg-blue-500 rounded px-3 py-1 text-white font-medium hover:cursor-pointer hover:scale-105 transition-all active:scale-100 transform-gpu hover:shadow-md;
}
</style>
