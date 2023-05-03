<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { Input, Select, Textarea, BlockButton, ClearButton } from './index';

const inputValue = ref('');
const options = [
  {value: 0, label: 'Option 0'},
  {value: 1, label: 'Option 1'},
  {value: 2, label: 'Option 2'},
  {value: 3, label: 'Option 3'},
]
const selectedValue = ref(0);
const error = computed(() => (+selectedValue.value) === 1);
watchEffect(() => {
  console.log(+selectedValue.value);
  console.log(error.value);
})
</script>

<template>
  <div class="w-[500px] p-6">
    <Input v-model="inputValue" :placeholder="'Enter a value...'"></Input>
    <Select v-model="selectedValue" :options="options" :error="error ? 'no, bad...' : undefined"></Select>
    <Textarea v-model="inputValue" :placeholder="'Enter a value...'"></Textarea>
    <BlockButton>Submit</BlockButton>
    <div class="mb-4"></div>
    <ClearButton>Questions?</ClearButton>
  </div>
</template>

<style lang="css">
@import './style.css';
</style>
