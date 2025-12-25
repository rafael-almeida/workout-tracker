export const sessions = [
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

export const exercises = [
  // Day 1
  {
    exerciseId: 1,
    sessionId: 1,
    exerciseName: 'Squat',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 60 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 80 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 100 },
      { setId: 4, setType: 'working', reps: 10, weight: 120 },
      { setId: 5, setType: 'working', reps: 10, weight: 120 },
      { setId: 6, setType: 'working', reps: 10, weight: 120 },
    ],
  },
  {
    exerciseId: 2,
    sessionId: 1,
    exerciseName: 'Inclined Bench Press',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 30 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 40 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 50 },
      { setId: 4, setType: 'working', reps: 10, weight: 60 },
      { setId: 5, setType: 'working', reps: 10, weight: 60 },
      { setId: 6, setType: 'working', reps: 10, weight: 60 },
    ],
  },
  {
    exerciseId: 3,
    sessionId: 1,
    exerciseName: 'Lat Pulldown',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 40 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 50 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 60 },
      { setId: 4, setType: 'working', reps: 10, weight: 70 },
      { setId: 5, setType: 'working', reps: 10, weight: 70 },
      { setId: 6, setType: 'working', reps: 10, weight: 70 },
    ],
  },
  {
    exerciseId: 4,
    sessionId: 1,
    exerciseName: 'Lying Leg Curl',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 20 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 30 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 40 },
      { setId: 4, setType: 'working', reps: 10, weight: 50 },
      { setId: 5, setType: 'working', reps: 10, weight: 50 },
      { setId: 6, setType: 'working', reps: 10, weight: 50 },
    ],
  },
  // Day 2
  {
    exerciseId: 5,
    sessionId: 2,
    exerciseName: 'Hip Thrust',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 60 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 80 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 100 },
      { setId: 4, setType: 'working', reps: 10, weight: 120 },
      { setId: 5, setType: 'working', reps: 10, weight: 120 },
      { setId: 6, setType: 'working', reps: 10, weight: 120 },
    ],
  },
  {
    exerciseId: 6,
    sessionId: 2,
    exerciseName: 'Bulgarian Split Squat',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 10 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 15 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 20 },
      { setId: 4, setType: 'working', reps: 10, weight: 25 },
      { setId: 5, setType: 'working', reps: 10, weight: 25 },
      { setId: 6, setType: 'working', reps: 10, weight: 25 },
    ],
  },
  {
    exerciseId: 7,
    sessionId: 2,
    exerciseName: 'Shoulder Press',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 20 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 30 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 40 },
      { setId: 4, setType: 'working', reps: 10, weight: 50 },
      { setId: 5, setType: 'working', reps: 10, weight: 50 },
      { setId: 6, setType: 'working', reps: 10, weight: 50 },
    ],
  },
  {
    exerciseId: 8,
    sessionId: 2,
    exerciseName: 'Face Pull',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 20 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 30 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 40 },
      { setId: 4, setType: 'working', reps: 10, weight: 50 },
      { setId: 5, setType: 'working', reps: 10, weight: 50 },
      { setId: 6, setType: 'working', reps: 10, weight: 50 },
    ],
  },
  // Day 3
  {
    exerciseId: 9,
    sessionId: 3,
    exerciseName: 'Romanian Deadlift',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 60 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 80 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 100 },
      { setId: 4, setType: 'working', reps: 10, weight: 120 },
      { setId: 5, setType: 'working', reps: 10, weight: 120 },
      { setId: 6, setType: 'working', reps: 10, weight: 120 },
    ],
  },
  {
    exerciseId: 10,
    sessionId: 3,
    exerciseName: 'Seated Row',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 40 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 50 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 60 },
      { setId: 4, setType: 'working', reps: 10, weight: 70 },
      { setId: 5, setType: 'working', reps: 10, weight: 70 },
      { setId: 6, setType: 'working', reps: 10, weight: 70 },
    ],
  },
  {
    exerciseId: 11,
    sessionId: 3,
    exerciseName: 'Chest Dip',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 0 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 5 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 10 },
      { setId: 4, setType: 'working', reps: 10, weight: 15 },
      { setId: 5, setType: 'working', reps: 10, weight: 15 },
      { setId: 6, setType: 'working', reps: 10, weight: 15 },
    ],
  },
  {
    exerciseId: 12,
    sessionId: 3,
    exerciseName: 'Goblet Squat',
    sets: [
      { setId: 1, setType: 'warmup', reps: 5, weight: 15 },
      { setId: 2, setType: 'warmup', reps: 5, weight: 20 },
      { setId: 3, setType: 'warmup', reps: 5, weight: 25 },
      { setId: 4, setType: 'working', reps: 10, weight: 30 },
      { setId: 5, setType: 'working', reps: 10, weight: 30 },
      { setId: 6, setType: 'working', reps: 10, weight: 30 },
    ],
  },
]
