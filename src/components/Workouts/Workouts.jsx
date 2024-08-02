import { useState, useEffect } from 'react';
import { index, create } from '../../services/workoutService';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    exercises: [{ name: '', weight: '', sets: '', reps: '' }]
  });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const fetchedWorkouts = await index();
    setWorkouts(fetchedWorkouts);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleChange = (evt) => {
    const { name, value, dataset } = evt.target;
    const index = Number(dataset.index); 

    setFormData(prevData => {
      if (name === 'date') {
        return { ...prevData, date: value };
      } else if (dataset.index !== undefined) {
        const updatedExercises = [...prevData.exercises];
        updatedExercises[index] = { ...updatedExercises[index], [name]: value };
        return { ...prevData, exercises: updatedExercises };
      }
      return prevData;
    });
  };

  const addExercise = () => {
    setFormData(prevData => ({
      ...prevData,
      exercises: [...prevData.exercises, { name: '', weight: '', sets: '', reps: '' }]
    }));
  };

  const removeExercise = (index) => {
    setFormData(prevData => ({
      ...prevData,
      exercises: prevData.exercises.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await handleAddWorkout(formData);
    resetForm();
    fetchWorkouts();
  };

  const handleAddWorkout = async (workoutData) => {
    await create(workoutData);
  };

  const resetForm = () => {
    setFormData({
      date: '',
      exercises: [{ name: '', weight: '', sets: '', reps: '' }]
    });
    setIsAdding(false);
  };

  return (
    <main>
      <section className="profile">
      {!isAdding ? (
        <div>
          <h1>Workouts</h1>
          <ul>
            {workouts.map((workout) => (
              <li key={workout._id}>
                <p><strong>Date:</strong> {formatDate(workout.date)}</p>
                <div>
                  {workout.exercises.map((exercise, index) => (
                    <div key={index}>
                      <p><strong>Exercise Name:</strong> {exercise.name}</p>
                      <p><strong>Weight:</strong> {exercise.weight} lbs</p>
                      <p><strong>Sets:</strong> {exercise.sets}</p>
                      <p><strong>Reps:</strong> {exercise.reps}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <button className="upload-btn" onClick={() => setIsAdding(true)}>Add New Workout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Log Workout</h1>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {formData.exercises.map((exercise, index) => (
            <div key={index}>
              <label htmlFor={`name-${index}`}>Exercise Name</label>
              <input
                type="text"
                name="name"
                id={`name-${index}`}
                value={exercise.name}
                data-index={index}
                onChange={handleChange}
                required
              />
              <label htmlFor={`weight-${index}`}>Weight (lbs)</label>
              <input
                type="number"
                name="weight"
                id={`weight-${index}`}
                value={exercise.weight}
                data-index={index}
                onChange={handleChange}
                min="0"
                required
              />
              <label htmlFor={`sets-${index}`}>Sets</label>
              <input
                type="number"
                name="sets"
                id={`sets-${index}`}
                value={exercise.sets}
                data-index={index}
                onChange={handleChange}
                min="1"
                required
              />
              <label htmlFor={`reps-${index}`}>Reps</label>
              <input
                type="number"
                name="reps"
                id={`reps-${index}`}
                value={exercise.reps}
                data-index={index}
                onChange={handleChange}
                min="1"
                required
              />

              <button className="upload-btn" type="button" onClick={() => removeExercise(index)}>Remove Exercise</button>
            </div>
          ))}
          <button className="upload-btn" type="button" onClick={addExercise}>Add Exercise</button>
          <button className="upload-btn" type="submit">Log Workout</button>
          <button className="upload-btn" type="button" onClick={resetForm}>Cancel</button>
        </form>
      )}
      </section>

    </main>
  
 
  );
};

export default Workouts;
