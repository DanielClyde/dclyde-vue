<script lang="ts" setup>
import { uid } from 'uid/single';
import { Transition } from 'vue';

export interface SelectOption<T> {
  value: T;
  label: string;
}

export interface BaseSelectProps<T> {
  modelValue: T;
  options: SelectOption<T>[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const props = defineProps<BaseSelectProps<any>>();
const emit = defineEmits(['update:modelValue']);
const id = uid();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="relative">
    <select
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', ($event?.target as any).value)"
      :id="id"
      :aria-describedBy="props.error ? `${id}-error` : null"
      :aria-invalid="!!props.error"
      :disabled="!!props.disabled"
      :aria-disabled="!!props.disabled"
      :aria-required="!!props.required"
      :required="!!props.required"
      class="dclyde-select"
    >
      <option v-for="o of props.options" :value="o.value">{{ o.label }}</option>
    </select>
    <Transition name="slide-down">
      <p
        class="dclyde-select-input-error"
        v-if="!!props.error"
        :id="`${id}-error`"
        aria-live="assertive"
      >
        {{ props.error }}
      </p>
    </Transition>
  </div>
</template>

<style lang="postcss">
.dclyde-select {
  @apply form-select block w-full bg-white border-slate-100 rounded-md text-sm shadow-inner placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:cursor-pointer disabled:bg-slate-50 disabled:hover:cursor-auto disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-500/50 invalid:text-red-500/50 focus:invalid:border-red-500/50 focus:invalid:ring-red-500/50 invalid:placeholder-shown:border-slate-100 valid:border-sky-500 valid:text-sky-500;
}
.dclyde-select-input-error {
  @apply text-red-500/50 text-sm text-left mt-1 w-full max-h-full absolute top-full;
}
</style>
