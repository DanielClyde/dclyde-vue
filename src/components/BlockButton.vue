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

<style>
.dclyde-block-button {
  @apply bg-light-blue-500 rounded px-5 py-2 text-white font-medium transition-all duration-200 transform-gpu disabled:transition-none disabled:opacity-70 disabled:cursor-auto cursor-pointer;
  box-shadow: inset 0px 1px 0px 0px hsl(200, 100%, 75%), 0px 1px 0px hsl(200, 30%, 40%);
}
.dclyde-block-button:hover {
  @apply duration-100;
  /* box-shadow: inset 0px 2px 0px 0px hsl(200, 100%, 75%), 0px 2px 0px hsl(200, 30%, 40%); */
}
.dclyde-block-button:active {
  @apply duration-100;
  box-shadow: inset 0px 1px 0px 0px hsl(200, 30%, 40%), 0px 1px 0px hsl(200, 54%, 49%);
}
</style>
