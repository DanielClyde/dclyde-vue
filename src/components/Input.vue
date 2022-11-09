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
  @apply form-input mt-1 block w-full bg-white border border-slate-100 rounded-md text-sm shadow-inner placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500/50 invalid:text-red-500/50
      focus:invalid:border-red-500/50 focus:invalid:ring-red-500/50
      invalid:placeholder-shown:border-slate-100
      valid:border-sky-500;
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
