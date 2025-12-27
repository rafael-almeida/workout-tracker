<script setup lang="ts">
import { onMounted, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, Plus } from 'lucide-vue-next'
import type { Exercise, Session, SessionId } from '../lib/data'
import db from '../lib/db'

const props = defineProps<{
  sessionId: string
}>()

const router = useRouter()

const sessionId = Number(props.sessionId) as SessionId
const session = ref<Session | null>(null)
const exercises = ref<Exercise[]>([])
const formState = reactive({
  sessionName: '',
  notes: '',
})
const isSaving = ref(false)

onMounted(async () => {
  const allSessions = await db.store('sessions').getAll<Session>()
  const foundSession = allSessions.find((s) => s.sessionId === sessionId) || null
  session.value = foundSession

  if (foundSession) {
    formState.sessionName = foundSession.sessionName
    formState.notes = foundSession.notes ?? ''
  }

  const allExercises = await db.store('exercises').getAll<Exercise>()
  exercises.value = allExercises.filter((e) => e.sessionId === sessionId)
})

const handleSubmit = async () => {
  if (!session.value) return

  const trimmedName = formState.sessionName.trim()
  if (!trimmedName) return

  isSaving.value = true

  try {
    const updatedSession = {
      ...toRaw(session.value),
      sessionName: trimmedName,
      notes: formState.notes.trim(),
    }

    await db.store('sessions').save(String(sessionId), updatedSession)
    session.value = updatedSession
  } finally {
    isSaving.value = false
  }
}

const goBack = () => {
  router.push(`/workout/${sessionId}`)
}
</script>

<template>
  <section v-if="session">
    <div class="mb-12 flex items-center justify-between border-b border-gray-300 pb-6">
      <button
        type="button"
        class="flex h-7 w-7 cursor-pointer items-center justify-center"
        @click="goBack"
      >
        <ChevronLeft :size="28" />
      </button>
      <h1 class="text-3xl font-bold">Edit Session</h1>
      <div class="h-7 w-7"></div>
    </div>

    <form class="space-y-6" @submit.prevent="handleSubmit">
      <label class="flex flex-col gap-2" for="session-name">
        <span class="font-semibold">Name</span>
        <input
          id="session-name"
          v-model="formState.sessionName"
          name="sessionName"
          type="text"
          class="w-full border-0 border-b border-gray-300 px-0 py-2 focus:border-black focus:ring-0 focus:outline-none"
          autocomplete="off"
          required
        />
      </label>

      <label class="flex flex-col gap-2" for="session-notes">
        <span class="font-semibold">Notes</span>
        <textarea
          id="session-notes"
          v-model="formState.notes"
          name="notes"
          class="w-full resize-none rounded-md border border-gray-300 p-2 focus:border-black focus:ring-0 focus:outline-none"
          rows="4"
        />
      </label>

      <div>
        <div class="flex items-center justify-between">
          <span class="font-semibold">Exercises</span>
          <button type="button" class="cursor-pointer">
            <Plus :size="19" />
          </button>
        </div>

        <div class="flex flex-col divide-y">
          <div v-for="exercise in exercises" :key="exercise.exerciseId" class="py-2">
            {{ exercise.exerciseName }}
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="w-full rounded bg-black py-4 text-white uppercase transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
          :disabled="isSaving"
        >
          {{ isSaving ? 'Saving…' : 'Save' }}
        </button>
      </div>
    </form>
  </section>
</template>
