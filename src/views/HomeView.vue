<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Exercise, SessionId, Session } from '../lib/data'
import db from '../lib/db'

const router = useRouter()

const sessions = ref<Session[]>([])
const exercises = ref<Exercise[]>([])

onMounted(async () => {
  sessions.value = await db.store('sessions').getAll<Session>()
  exercises.value = await db.store('exercises').getAll<Exercise>()
})

const goToWorkout = (sessionId: SessionId) => {
  router.push(`/workout/${sessionId}`)
}

const getExercisesForSession = (sessionId: SessionId): Exercise[] => {
  return exercises.value.filter((e) => e.sessionId === sessionId)
}
</script>

<template>
  <section>
    <div class="flex flex-col gap-4">
      <div
        v-for="session in sessions"
        :key="session.sessionId"
        class="cursor-pointer space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
        @click="goToWorkout(session.sessionId)"
      >
        <h2 class="text-2xl font-bold text-gray-900">{{ session.sessionName }}</h2>
        <div class="space-y-2">
          <p class="text-sm tracking-wide text-gray-500">Exercises</p>
          <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <li
              v-for="exercise in getExercisesForSession(session.sessionId)"
              :key="exercise.exerciseId"
              class="flex items-center gap-2 text-gray-700"
            >
              <span class="text-base">{{ exercise.exerciseName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
