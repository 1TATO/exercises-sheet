/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import { Form } from '@unform/web';

import { useCallback } from 'react';
import { useModal } from '../../context/ModalContext';
import { useExercise } from '../../context/ExercisesContext';

import Input from '../Input';
import Button from '../Button';

function FormComponent() {
  const { handleSubmit, handleUpdate, handleCloseNewExerciseModal } = useModal();
  const { updatedExercise, updatingExercise } = useExercise();

  const handleEditSubmit = useCallback((data) => {
    const updatedEx = {
      data,
      id: updatedExercise.id,
    };

    handleCloseNewExerciseModal();
    handleUpdate(updatedEx);
  }, []);

  return (
    <>
      {updatingExercise ? (
        <Form
          onSubmit={handleEditSubmit}
          initialData={{
            name: updatedExercise.name,
            weight: updatedExercise.weight,
            repetitions: updatedExercise.repetitions,
          }}
        >
          <h2 className="react-modal-title">Novo exercício</h2>

          <Input name="name" type="text" placeholder="Nome" />
          <Input name="weight" type="text" placeholder="Carga" />
          <Input name="repetitions" type="text" placeholder="Repetições" />

          <Button type="submit">
            Editar
          </Button>
        </Form>
      ) : (
        <Form
          onSubmit={handleSubmit}
        >
          <h2 className="react-modal-title">Novo exercício</h2>

          <Input name="name" type="text" placeholder="Nome" />
          <Input name="weight" type="text" placeholder="Carga" />
          <Input name="repetitions" type="text" placeholder="Repetições" />

          <Button type="submit">
            Cadastrar
          </Button>
        </Form>
      )}
    </>
  );
}

FormComponent.propTypes = {
  edit: PropTypes.bool,
};

FormComponent.defaultProps = {
  edit: false,
};

export default FormComponent;
