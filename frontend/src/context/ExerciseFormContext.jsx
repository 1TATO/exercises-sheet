/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import {
  createContext, useContext, useState, useEffect,
} from 'react';

import api from '../services/api';

import { useExerciseModal } from './ExerciseModalContext';

const ExerciseFormContext = createContext();

const ExerciseFormProvider = ({ children }) => {
  const { handleOpenNewExerciseModal, handleCloseNewExerciseModal } = useExerciseModal();

  const [exercises, setExercises] = useState([]);
  const [isEditingExercise, setIsEditingExercise] = useState(false);
  const [editingExerciseData, setEditingExerciseData] = useState({});

  useEffect(() => {
    api.get('/dashboard')
      .then((response) => setExercises(response.data));
  }, []);

  async function handleCreateExercise(exercise) {
    const { data } = await api.post('/dashboard', exercise);

    setExercises([
      ...exercises,
      data,
    ]);

    handleCloseNewExerciseModal();
  }

  async function handleEditExercise(exercise) {
    setIsEditingExercise(true);
    setEditingExerciseData(exercise);
    handleOpenNewExerciseModal();

    await api.put(`/dashboard/${exercise.id}`, exercise)
      .then(() => {
        setExercises(exercises.map((ex) => (ex.id === exercise.id ? (exercise) : (ex))));
      });
  }

  async function handleDeleteExercise(id) {
    await api.delete(`/dashboard/${id}`);

    setExercises((exs) => exs.filter((ex) => ex.id !== id));
  }

  return (
    <ExerciseFormContext.Provider
      value={{
        exercises,
        handleCreateExercise,
        handleEditExercise,
        handleDeleteExercise,
        isEditingExercise,
        setIsEditingExercise,
        editingExerciseData,
      }}
    >
      {children}
    </ExerciseFormContext.Provider>
  );
};

function useExerciseForm() {
  const context = useContext(ExerciseFormContext);

  if (!context) {
    throw new Error('useExerciseForm must be usedwithin an ExerciseFormProvider');
  }

  return context;
}

export { ExerciseFormProvider, useExerciseForm };
