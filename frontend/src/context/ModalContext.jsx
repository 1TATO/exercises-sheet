import {
  createContext, useContext, useState,
} from 'react';

// eslint-disable-next-line import/no-cycle
import ModalComponent from '../components/Modal';

import { useExercise } from './ExercisesContext';

const ModalContext = createContext();

// eslint-disable-next-line react/prop-types
const ModalProvider = ({ children }) => {
  const {
    createExercise, updateExercise, setUpdatingExercise,
  } = useExercise();

  const [isNewExerciseModalOpen, setIsNewExerciseModalOpen] = useState(false);

  function handleOpenNewExerciseModal() {
    setUpdatingExercise(false);
    setIsNewExerciseModalOpen(true);
  }

  function handleCloseNewExerciseModal() {
    setIsNewExerciseModalOpen(false);
  }

  async function handleSubmit(data) {
    createExercise(data);

    handleCloseNewExerciseModal();
  }

  async function handleUpdate(exercise) {
    setIsNewExerciseModalOpen(true);
    setUpdatingExercise(true);

    updateExercise(exercise);
  }

  return (
    <ModalContext.Provider value={{
      isNewExerciseModalOpen,
      handleOpenNewExerciseModal,
      handleCloseNewExerciseModal,
      handleSubmit,
      handleUpdate,
    }}
    >
      {children}
      <ModalComponent edit />
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be usedwithin an ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
