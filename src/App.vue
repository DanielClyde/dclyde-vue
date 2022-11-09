<script setup lang="ts">
import { ref } from 'vue';
import { Typeahead } from './index';
import { BlockButton } from './index';

const value = ref<string>();
const error = ref<string>();

setTimeout(() => {
  error.value =
    'This sucks and is a much longer error message. You should do something about this.';
}, 1000);

async function getPredictions() {
  return [];
}
</script>

<template>
  <div class="w-[500px]">
    <Typeahead
      :label="'Thing'"
      :placeholder="'Enter a thing'"
      v-model="value"
      :getPredictions="getPredictions"
      :required="true"
      type="text"
      :error="error"
    ></Typeahead>
    <BlockButton>Click Me</BlockButton>
  </div>
</template>

<style lang="postcss"></style>
