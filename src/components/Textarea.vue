<template>
  <div :class="props.containingClass || `w-full relative my-6`">
    <label class="dclyde-textarea-label" v-if="!!props.label" :for="id">{{ props.label }}</label>
    <textarea
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
      class="dclyde-textarea"
    />
    <Transition name="slide-down">
      <div
        v-if="error"
        :id="`${id}-error`"
        class="dclyde-textarea-error"
        aria-live="assertive"
      >
        {{ error }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { uid } from 'uid/single';
export interface TextareaProps {
  label?: string;
  modelValue?: string | number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  containingClass?: string;
}

const props = defineProps<TextareaProps>();
const emit = defineEmits(['update:modelValue']);
const id = uid();
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="postcss">
.dclyde-textarea-label {
  @apply block text-left text-gray-500 mb-1;
}
.dclyde-textarea {
  @apply form-textarea mt-1 block w-full bg-white border border-slate-100 rounded-md text-sm shadow-inner placeholder-slate-400 focus:outline-none focus:border-valid focus:ring-1 focus:ring-valid disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-err invalid:text-err focus:invalid:border-err focus:invalid:ring-err invalid:placeholder-shown:border-slate-100 valid:border-valid;
}
.dclyde-textarea-error {
  @apply text-err text-sm text-left mt-1 w-full max-h-full absolute top-full;
}
</style>

<style scoped></style>
