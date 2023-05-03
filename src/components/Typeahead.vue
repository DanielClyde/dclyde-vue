<script setup lang="ts">
import { ref, watch } from 'vue';
import Input from './Input.vue';

export interface TypeaheadOption {
  id: string;
  label: string;
}
const props = defineProps<{
  getOptions: (search: string) => Promise<TypeaheadOption[]>;
  disabled?: boolean;
  modelValue: string;
  autofocus?: boolean;
  placeholder?: string;
}>();
const search = ref('');
const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void;
  (e: 'update:text', val: string): void;
}>();
const predictions = ref<TypeaheadOption[]>([]);
const showPredictions = ref(false);
const arrowIndex = ref(-1);


let timeout: number | null = null;
watch(() => props.modelValue, (val, old) => {
  if (old && !val) {
    if (timeout) {
      clearTimeout(timeout);
    }
    search.value = '';
    showPredictions.value = false;
    predictions.value = [];
  }
});
function onInput(input: string) {
  search.value = input;
  emit('update:text', search.value);
  emit('update:modelValue', '');
  if (timeout) {
    clearTimeout(timeout);
  }
  if (search.value) {
    timeout = setTimeout(() => {
      let searched = search.value;
      props.getOptions(search.value).then((options) => {
        if (search.value === searched) {
          predictions.value = options.slice(0, 8);
          showPredictions.value = !!predictions.value?.length;
        }
      });
    }, 300) as any;
  } else {
    showPredictions.value = false;
    timeout = setTimeout(() => {
      if (!search.value) {
        predictions.value = [];
      }
    }, 300) as any;
  }
}

function predictionSelected(o: TypeaheadOption) {
  search.value = o.label;
  showPredictions.value = false;
  emit('update:modelValue', o.id);
}

function onEnter($event: KeyboardEvent) {
  if (showPredictions.value) {
    $event.preventDefault();
    if (arrowIndex.value > -1 && predictions.value && predictions.value[arrowIndex.value]) {
      predictionSelected(predictions.value[arrowIndex.value]);
    }
  }
}

function onUp() {
  arrowIndex.value -= 1;
  if (arrowIndex.value < 0) {
    arrowIndex.value = predictions.value?.length ? predictions.value?.length - 1 : -1;
  }
}

function onDown() {
  arrowIndex.value += 1;
  if (predictions.value?.length && arrowIndex.value > predictions.value.length - 1) {
    arrowIndex.value = 0;
  }
}
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="relative w-full">
    <Input :placeholder="props.placeholder" :autofocus="props.autofocus" @keydown.down.stop="onDown()" @keydown.up.stop="onUp()" @keydown.enter.stop="onEnter" v-bind="$attrs" @update:model-value="onInput" v-model="search"></Input>
    <div
      @click.outside="showPredictions = false"
      v-if="showPredictions"
      class="absolute top-[90%] w-full max-h-60 overflow-auto bg-white z-10 border rounded-b-lg divide-y"
    >
      <div
        @click="predictionSelected(p)"
        class="p-2 text-gray-700 hover:bg-light-blue-200 cursor-pointer"
        v-for="(p, i) in predictions"
        :key="i"
        :class="arrowIndex === i ? 'bg-light-blue-200' : ''"
      >
        {{ p.label }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
