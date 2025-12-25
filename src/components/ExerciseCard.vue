<script setup lang="ts">
import ExerciseSetButton from './ExerciseSetButton.vue'

const props = defineProps<{
  exercise: {
    exerciseId: number
    exerciseName: string
    sets: {
      setId: number
      setType: 'warmup' | 'working'
      reps: number
      weight: number
      completed: boolean
    }[]
  }
}>()

const warmupSets = props.exercise?.sets.filter((set) => set.setType === 'warmup')
const workingSets = props.exercise?.sets.filter((set) => set.setType === 'working')

const emit = defineEmits(['update:completed'])

const updateSetCompleted = (setId: number, completed: boolean) => {
  emit('update:completed', setId, completed)
}
</script>

<template>
  <div class="flex w-full flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
    <div>
      <h2 class="text-lg font-semibold text-gray-900">
        {{ props.exercise.exerciseName }}
      </h2>
    </div>

    <div v-if="warmupSets.length > 0">
      <span class="text-sm tracking-wide text-gray-500">Warmup Sets</span>
      <div class="flex gap-4 py-1">
        <ExerciseSetButton
          v-for="set in warmupSets"
          :key="set.setId"
          :reps="set.reps"
          :weight="set.weight"
          :completed="set.completed"
          @update:completed="(completed) => updateSetCompleted(set.setId, completed)"
        />
      </div>
    </div>

    <div v-if="workingSets.length > 0">
      <span class="text-sm tracking-wide text-gray-500">Working Sets</span>
      <div class="flex gap-4 py-1">
        <ExerciseSetButton
          v-for="set in workingSets"
          :key="set.setId"
          :reps="set.reps"
          :weight="set.weight"
          :completed="set.completed"
          @update:completed="(completed) => updateSetCompleted(set.setId, completed)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
