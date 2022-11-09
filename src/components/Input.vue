<template>
  <div :class="containingClass || `w-full relative my-6`">
    <label class="dclyde-input-label" v-if="label" :for="id">{{ label }}</label>
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
      class="dclyde-input"
    />
    <Transition name="slide-down">
      <div
        v-if="error"
        :id="`${id}-error`"
        class="dclyde-input-error"
        aria-live="assertive"
      >
        {{ error }}
      </div>
    </Transition>
  </div>
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
  containingClass?: string;
}

defineProps<InputProps>();
const emit = defineEmits(['update:modelValue']);
const id = uid();
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="postcss">
.dclyde-input-label {
  @apply block text-left text-gray-500 mb-1;
}
.dclyde-input {
  @apply form-input rounded border-gray-100 bg-white shadow-inner focus:ring-blue-500/50 focus:border-blue-500/50 w-full;
}
.dclyde-input-error {
  @apply text-red-500/50 text-sm text-left mt-1 w-full max-h-full absolute top-full;
}
</style>

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
