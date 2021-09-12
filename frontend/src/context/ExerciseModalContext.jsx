/* eslint-disable react/prop-types */
import {
  createContext, useContext, useState,
} from 'react';

const ExerciseModalContext = createContext();

const ExerciseModalProvider = ({ children }) => {
  const [isNewExerciseModalOpen, setIsNewExerciseModalOpen] = useState(false);

  function handleOpenNewExerciseModal() {
    setIsNewExerciseModalOpen(true);
  }

  function handleCloseNewExerciseModal() {
    setIsNewExerciseModalOpen(false);
  }

  function handleSubmit(data) {
    // e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <ExerciseModalContext.Provider
      value={{
        isNewExerciseModalOpen,
        handleOpenNewExerciseModal,
        handleCloseNewExerciseModal,
        handleSubmit,
      }}
    >
      {children}
    </ExerciseModalContext.Provider>
  );
};

function useExerciseModal() {
  const context = useContext(ExerciseModalContext);

  if (!context) {
    throw new Error('useExerciseModal must be usedwithin an ExerciseModalProvider');
  }

  return context;
}

export { ExerciseModalProvider, useExerciseModal };
