/* eslint-disable no-unused-vars */
import {
  createContext, useCallback, useContext, useState,
} from 'react';
import api from '../services/api';

const ModalContext = createContext();

// eslint-disable-next-line react/prop-types
const ModalProvider = ({ children }) => {
  const [isNewExerciseModalOpen, setIsNewExerciseModalOpen] = useState(false);

  function handleOpenNewExerciseModal() {
    setIsNewExerciseModalOpen(true);
  }

  function handleCloseNewExerciseModal() {
    setIsNewExerciseModalOpen(false);
  }

  return (
    <ModalContext.Provider value={{ handleOpenNewExerciseModal, handleCloseNewExerciseModal }}>
      {children}

      {/* <Modal
          isOpen={isNewExerciseModalOpen}
          onRequestClose={handleCloseNewExerciseModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button
            type="button"
            onClick={handleCloseNewExerciseModal}
            className="react-modal-close"
          >
            <FiX />
          </button>

          <Form onSubmit={handleSubmit} initialData={{}}>
            <h2 className="react-modal-title">Novo exercício</h2>

            <Input name="name" type="text" placeholder="Nome" />
            <Input name="weight" type="text" placeholder="Carga" />
            <Input name="repetitions" type="text" placeholder="Repetições" />

            <Button type="submit">
              Cadastrar
            </Button>
          </Form>
        </Modal> */}
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
