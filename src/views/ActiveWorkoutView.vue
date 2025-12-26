<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, SquarePen } from 'lucide-vue-next'
import ExerciseCard from '../components/ExerciseCard.vue'
import type { Session, Exercise, SessionId, ExerciseId, SetId } from '../lib/data'
import db from '../lib/db'

const props = defineProps<{
  sessionId: string
}>()

const router = useRouter()

const sessionId = Number(props.sessionId) as SessionId
const session = ref<Session | null>(null)
const exercises = ref<Exercise[]>([])

onMounted(async () => {
  const allSessions = await db.store('sessions').getAll<Session>()
  session.value = allSessions.find((s) => s.sessionId === sessionId) || null

  const allExercises = await db.store('exercises').getAll<Exercise>()
  exercises.value = allExercises.filter((e) => e.sessionId === sessionId)
})

const updateSetCompleted = (exerciseId: ExerciseId, setId: SetId, completed: boolean) => {
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
  <section v-if="session">
    <div class="mb-12 flex items-center justify-between border-b border-gray-300 pb-6">
      <button class="flex h-7 w-7 cursor-pointer items-center justify-center" @click="goBack">
        <ChevronLeft :size="28" />
      </button>
      <h1 class="text-3xl font-bold">{{ session.sessionName }}</h1>
      <button class="flex h-7 w-7 cursor-pointer items-center justify-center" @click="goToEdit">
        <SquarePen :size="20" />
      </button>
    </div>

    <div class="flex flex-col gap-4">
      <ExerciseCard
        v-for="exercise in exercises"
        :key="exercise.exerciseId"
        :exercise="exercise"
        @update:set-completed="
          (setId, completed) => updateSetCompleted(exercise.exerciseId, setId, completed)
        "
      />
    </div>
  </section>
</template>
