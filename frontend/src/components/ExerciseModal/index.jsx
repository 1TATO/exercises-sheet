import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { useExerciseModal } from '../../context/ExerciseModalContext';

import ExerciseForm from '../ExerciseForm';

Modal.setAppElement('#root');

function ExerciseModal() {
  const {
    isNewExerciseModalOpen,
    handleCloseNewExerciseModal,
  } = useExerciseModal();

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

      <ExerciseForm />
    </Modal>
  );
}

export default ExerciseModal;
