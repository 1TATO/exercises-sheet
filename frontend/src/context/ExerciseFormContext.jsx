/* eslint-disable react/prop-types */
import {
  createContext, useContext, useState, useEffect,
} from 'react';

import api from '../services/api';

const ExerciseFormContext = createContext();

const ExerciseFormProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    api.get('/dashboard')
      .then((response) => setExercises(response.data));
  }, []);

  function handleEditExercise(exercise) {
    console.log('Editing', exercise);
  }

  function handleDeleteExercise(exercise) {
    console.log('Deleting', exercise);
  }

  return (
    <ExerciseFormContext.Provider
      value={{
        exercises,
        handleEditExercise,
        handleDeleteExercise,
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
