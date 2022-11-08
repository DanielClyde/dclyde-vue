<template>
  <Input
    v-model="modelValue"
    v-bind="$attrs"
    :label="label"
    :error="error"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
  ></Input>
</template>

<script lang="ts" setup>
import Input from './Input.vue';

export interface TypeaheadProps {
  modelValue?: string | number;
  getPredictions: () => Promise<Array<{ label: string; id: string | number }>>;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}
defineProps<TypeaheadProps>();
</script>

<style scoped lang="postcss"></style>
