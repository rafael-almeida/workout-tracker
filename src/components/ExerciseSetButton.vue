<script setup lang="ts">
const props = defineProps({
  reps: Number,
  weight: Number,
  completed: Boolean,
})

const emit = defineEmits(['update:completed'])

const toggleCompleted = () => {
  emit('update:completed', !props.completed)
}
</script>

<template>
  <button
    @click="toggleCompleted"
    :class="[
      'flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full border border-gray-300 text-sm',
      props.completed ? 'bg-gray-100' : 'bg-white',
    ]"
  >
    <span class="font-bold">{{ props.reps }}</span>
    <span>{{ props.weight }}</span>
  </button>
</template>
