<template>
  <button v-bind="$attrs" class="dclyde-clear-button" @click.stop="emit('buttonClick')"><slot></slot></button>
</template>

<script setup lang="ts">
const emit = defineEmits(['buttonClick']);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style lang="postcss">
.dclyde-clear-button {
  @apply appearance-none bg-transparent text-light-blue-500 text-sm transition-colors duration-100;
}
.dclyde-clear-button:hover {
  @apply text-light-blue-600;
}
.dclyde-clear-button:active {
  @apply text-light-blue-500
}
</style>
