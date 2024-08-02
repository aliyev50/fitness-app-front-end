const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/workouts`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (workoutFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workoutFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const addExerciseToWorkout = async (workoutId, exerciseFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${workoutId}/exercises`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exerciseFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteWorkout = async (workoutId) => {
  try {
    const res = await fetch(`${BASE_URL}/${workoutId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, create, addExerciseToWorkout, deleteWorkout };
