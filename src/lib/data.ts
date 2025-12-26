import localDB from './db'

export type SessionId = number
export type ExerciseId = number
export type SetId = number

export interface Session {
  sessionId: SessionId
  sessionName: string
}

export interface Exercise {
  exerciseId: ExerciseId
  sessionId: SessionId
  exerciseName: string
  sets: Set[]
}

export type SetType = 'warmup' | 'working'

export interface Set {
  setId: SetId
  setType: SetType
  reps: number
  weight: number
  completed: boolean
}

export const sessions: Session[] = [
  {
    sessionId: 1,
    sessionName: 'Day 1',
  },
  {
    sessionId: 2,
    sessionName: 'Day 2',
  },
  {
    sessionId: 3,
    sessionName: 'Day 3',
  },
]

export const exercises: Exercise[] = [
  // Day 1
  {
    exerciseId: 1,
    sessionId: 1,
    exerciseName: 'Squat',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 60, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 80, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 100, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 120, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 120, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 120, completed: false },
    ],
  },
  {
    exerciseId: 2,
    sessionId: 1,
    exerciseName: 'Inclined Bench Press',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 30, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 40, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 50, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 60, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 60, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 60, completed: false },
    ],
  },
  {
    exerciseId: 3,
    sessionId: 1,
    exerciseName: 'Lat Pulldown',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 40, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 50, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 60, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 70, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 70, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 70, completed: false },
    ],
  },
  {
    exerciseId: 4,
    sessionId: 1,
    exerciseName: 'Lying Leg Curl',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 20, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 30, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 40, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 50, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 50, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 50, completed: false },
    ],
  },
  // Day 2
  {
    exerciseId: 5,
    sessionId: 2,
    exerciseName: 'Hip Thrust',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 60, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 80, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 100, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 120, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 120, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 120, completed: false },
    ],
  },
  {
    exerciseId: 6,
    sessionId: 2,
    exerciseName: 'Bulgarian Split Squat',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 10, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 15, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 20, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 25, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 25, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 25, completed: false },
    ],
  },
  {
    exerciseId: 7,
    sessionId: 2,
    exerciseName: 'Shoulder Press',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 20, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 30, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 40, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 50, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 50, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 50, completed: false },
    ],
  },
  {
    exerciseId: 8,
    sessionId: 2,
    exerciseName: 'Face Pull',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 20, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 30, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 40, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 50, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 50, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 50, completed: false },
    ],
  },
  // Day 3
  {
    exerciseId: 9,
    sessionId: 3,
    exerciseName: 'Romanian Deadlift',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 60, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 80, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 100, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 120, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 120, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 120, completed: false },
    ],
  },
  {
    exerciseId: 10,
    sessionId: 3,
    exerciseName: 'Seated Row',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 40, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 50, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 60, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 70, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 70, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 70, completed: false },
    ],
  },
  {
    exerciseId: 11,
    sessionId: 3,
    exerciseName: 'Chest Dip',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 0, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 5, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 10, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 15, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 15, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 15, completed: false },
    ],
  },
  {
    exerciseId: 12,
    sessionId: 3,
    exerciseName: 'Goblet Squat',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 15, completed: false },
      { setId: 2, setType: 'warmup', reps: 5, weight: 20, completed: false },
      { setId: 3, setType: 'warmup', reps: 5, weight: 25, completed: false },
      { setId: 4, setType: 'working', reps: 10, weight: 30, completed: false },
      { setId: 5, setType: 'working', reps: 10, weight: 30, completed: false },
      { setId: 6, setType: 'working', reps: 10, weight: 30, completed: false },
    ],
  },
]

const db = localDB

export async function initializeData() {
  const existingSessions = await db.store('sessions').getAll<Session>()
  if (existingSessions.length === 0) {
    sessions.forEach(async (s) => {
      await db.store('sessions').save(String(s.sessionId), s)
    })
  }

  const existingExercises = await db.store('exercises').getAll()
  if (existingExercises.length === 0) {
    exercises.forEach(async (e) => {
      await db.store('exercises').save(String(e.exerciseId), e)
    })
  }
}
