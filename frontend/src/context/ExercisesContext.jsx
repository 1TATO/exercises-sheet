import {
  createContext, useEffect, useContext, useState,
} from 'react';

import api from '../services/api';

const ExercisesContext = createContext();

// eslint-disable-next-line react/prop-types
const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

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

  async function updateExercise(id) {
    console.log(id);

    // await api.update(`/dashboard/${id}`);
  }

  async function deleteExercise(id) {
    await api.delete(`/dashboard/${id}`);

    setExercises((exs) => exs.filter((ex) => ex.id !== id));
  }

  return (
    <ExercisesContext.Provider value={{
      exercises, createExercise, updateExercise, deleteExercise,
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
