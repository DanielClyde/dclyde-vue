<template>
  <label class="block text-left text-gray-500 mb-1" v-if="label" :for="id">{{
    label
  }}</label>
  <input
    :id="id"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    :aria-describedby="error ? `${id}-error` : undefined"
    :aria-invalid="!!error"
    :aria-disabled="!!disabled"
    :disabled="!!disabled"
    :aria-required="!!required"
    :required="!!required"
    @input="emit('update:modelValue', ($event.target as any).value)"
    class="form-input rounded border-gray-100 bg-white shadow-inner focus:ring-blue-500/50 focus:border-blue-500/50"
  />
  <Transition name="slide-down">
    <p
      v-if="error"
      :id="`${id}-error`"
      class="text-red-500/50 text-sm text-left mt-1"
      aria-live="assertive"
    >
      {{ error }}
    </p>
  </Transition>
</template>

<script setup lang="ts">
import { uid } from 'uid/single';
export interface InputProps {
  label?: string;
  modelValue?: string | number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

defineProps<InputProps>();
const emit = defineEmits(['update:modelValue']);
const id = uid();
</script>

<style scoped>
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease-out;
}
</style>
