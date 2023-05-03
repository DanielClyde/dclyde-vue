<template>
  <div :class="props.containingClass || `w-full relative my-6`">
    <label class="dclyde-input-label" v-if="!!props.label" :for="id">{{ props.label }}</label>
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

const props = defineProps<InputProps>();
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
  @apply form-input mt-1 block w-full bg-white border border-slate-100 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-light-blue-800 focus:ring-1 focus:ring-light-blue-800 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-red-300 invalid:text-red-300 focus:invalid:border-red-300 focus:invalid:ring-red-300 invalid:placeholder-shown:border-slate-100 valid:border-light-blue-800;
}
.dclyde-input-error {
  @apply text-red-300 text-sm text-left mt-1 w-full max-h-full absolute top-full;
}
</style>

<style scoped></style>
