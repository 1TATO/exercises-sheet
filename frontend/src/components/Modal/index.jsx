/* eslint-disable import/no-cycle */
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { useModal } from '../../context/ModalContext';
import { useExercise } from '../../context/ExercisesContext';

import FormComponent from '../Form';

Modal.setAppElement('#root');

function ModalComponent() {
  const { isNewExerciseModalOpen, handleCloseNewExerciseModal } = useModal();
  const { updateExercise } = useExercise();
  return (
    <Modal
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

      {!updateExercise ? (
        <FormComponent edit />
      ) : (
        <FormComponent />
      )}
    </Modal>
  );
}

export default ModalComponent;
