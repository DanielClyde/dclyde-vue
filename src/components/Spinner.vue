<template>
  <div v-bind="$attrs" class="dclyde-spinner"></div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.dclyde-spinner {
  @apply w-[24px] h-[24px] rounded-full border-4 border-white/50 border-t-white/90 animate-spin;
}
</style>
