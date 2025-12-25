<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ExerciseCard from '../components/ExerciseCard.vue'
import { sessions as allSessions, exercises as allExercises } from '../lib/data'

const props = defineProps<{
  sessionId: string
}>()

const router = useRouter()

const sessionId = Number(props.sessionId)
const session = ref(allSessions.find((s) => s.sessionId === sessionId)!)
const exercises = ref(allExercises.filter((e) => e.sessionId === session.value.sessionId))

const updateSetCompleted = (exerciseId: number, setId: number, completed: boolean) => {
  const exercise = exercises.value.find((e) => e.exerciseId === exerciseId)
  if (exercise) {
    const set = exercise.sets.find((s) => s.setId === setId)
    if (set) {
      set.completed = completed
    }
  }
}

const goBack = () => {
  router.push('/')
}

const goToEdit = () => {
  router.push(`/workout/${sessionId}/edit`)
}
</script>

<template>
  <section>
    <div class="mb-12 flex items-center justify-between border-b border-gray-300 pb-6">
      <button class="h-8 w-8 cursor-pointer rounded border border-gray-300" @click="goBack">
        Back
      </button>
      <h1 class="text-3xl font-bold">{{ session.sessionName }}</h1>
      <button class="h-8 w-8 cursor-pointer rounded border border-gray-300" @click="goToEdit">
        Edit
      </button>
    </div>

    <div class="flex flex-col gap-4">
      <ExerciseCard
        v-for="exercise in exercises"
        :key="exercise.exerciseId"
        :exercise="exercise"
        @update:completed="
          (setId, completed) => updateSetCompleted(exercise.exerciseId, setId, completed)
        "
      />
    </div>
  </section>
</template>
