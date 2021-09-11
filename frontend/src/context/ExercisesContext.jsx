/* eslint-disable no-unused-vars */
import {
  createContext, useEffect, useContext, useState, useCallback,
} from 'react';

import api from '../services/api';

const ExercisesContext = createContext();

// eslint-disable-next-line react/prop-types
const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [updatedExercise, setUpdatedExercise] = useState({});
  const [updatingExercise, setUpdatingExercise] = useState(false);

  useEffect(() => {
    api.get('/dashboard')
      .then((response) => setExercises(response.data));
  }, []);

  async function createExercise(exerciseInput) {
    const { data } = await api.post('/dashboard', exerciseInput);

    setExercises([
      ...exercises,
      data,
    ]);
  }

  // const updateExercise = useCallback(async (exercise) => {
  //   try {
  //     setUpdatedExercise(exercise);
  //     console.log('exercise', exercise);

  //     const { name, weight, repetitions } = exercise;

  //     const response = await api.put(`/dashboard/${exercise.id}`, { name, weight, repetitions });

  //     console.log('response', response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  async function updateExercise(exercise) {
    // console.log('exercise', exercise.id);
    setUpdatedExercise(exercise);

    const response = await api.put(`/dashboard/${exercise.id}`);

    console.log('response', response);
    const updExercise = response.data.exercises;

    console.log('updExercise', updExercise);

    const list = exercises.map((ex) => {
      if (ex.id === exercise.id) {
        return updExercise;
      }

      return ex;
    });

    setExercises(list);
  }

  async function deleteExercise(id) {
    await api.delete(`/dashboard/${id}`);

    setExercises((exs) => exs.filter((ex) => ex.id !== id));
  }

  return (
    <ExercisesContext.Provider value={{
      exercises,
      createExercise,
      updateExercise,
      deleteExercise,
      updatedExercise,
      setUpdatedExercise,
      updatingExercise,
      setUpdatingExercise,
    }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};

function useExercise() {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw new Error('useExercise must be usedwithin an ExercisesProvider');
  }

  return context;
}

export { ExercisesProvider, useExercise };
