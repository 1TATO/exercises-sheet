import Modal from 'react-modal';
import { Form } from '@unform/web';
import { FiX } from 'react-icons/fi';

import Input from '../Input';
import Button from '../Button';

import { useExerciseModal } from '../../context/ExerciseModalContext';

Modal.setAppElement('#root');

function ExerciseModal() {
  const {
    isNewExerciseModalOpen,
    handleCloseNewExerciseModal,
    handleSubmit,
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

      <Form onSubmit={handleSubmit} initialData={{}}>
        <h2 className="react-modal-title">Novo exercício</h2>

        <Input name="name" type="text" placeholder="Nome" />
        <Input name="weight" type="text" placeholder="Carga" />
        <Input name="repetitions" type="text" placeholder="Repetições" />

        <Button type="submit" onClick={() => { }}>
          Cadastrar
        </Button>
      </Form>
    </Modal>
  );
}

export default ExerciseModal;
