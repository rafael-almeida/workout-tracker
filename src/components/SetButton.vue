<script setup lang="ts">
import type { Set } from '../lib/data'

const props = defineProps<{
  set: Set
}>()

const emit = defineEmits(['update:completed'])

const toggleCompleted = () => {
  emit('update:completed', !props.set.completed)
}
</script>

<template>
  <button
    @click="toggleCompleted"
    :class="[
      'flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full border border-gray-300 text-sm',
      props.set.completed ? 'bg-gray-100' : 'bg-white',
    ]"
  >
    <span class="font-bold">{{ props.set.reps }}</span>
    <span>{{ props.set.weight }}</span>
  </button>
</template>
