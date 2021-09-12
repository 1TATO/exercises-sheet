/* eslint-disable import/no-cycle */
import { useCallback } from 'react';
import { Form } from '@unform/web';

import Input from '../Input';
import Button from '../Button';

import { useExerciseModal } from '../../context/ExerciseModalContext';
import { useExerciseForm } from '../../context/ExerciseFormContext';

function ExerciseForm() {
  const { handleCloseNewExerciseModal } = useExerciseModal();
  const {
    handleCreateExercise,
    handleEditExercise,
    isEditingExercise,
    editingExerciseData,
  } = useExerciseForm();

  const handleEdit = useCallback(async (editedExercise) => {
    const data = {
      ...editedExercise,
      id: editingExerciseData.id,
    };

    await handleEditExercise(data);
    handleCloseNewExerciseModal();
  }, []);

  return (
    (isEditingExercise ? (
      <Form
        onSubmit={handleEdit}
        initialData={{
          name: editingExerciseData.name,
          weight: editingExerciseData.weight,
          repetitions: editingExerciseData.repetitions,
        }}
      >
        <h2 className="react-modal-title">Editar exercício</h2>

        <Input name="name" type="text" placeholder="Nome" />
        <Input name="weight" type="text" placeholder="Carga" />
        <Input name="repetitions" type="text" placeholder="Repetições" />

        <Button type="submit" onClick={() => {}}>
          Editar
        </Button>
      </Form>
    ) : (
      <Form onSubmit={handleCreateExercise}>
        <h2 className="react-modal-title">Novo exercício</h2>

        <Input name="name" type="text" placeholder="Nome" />
        <Input name="weight" type="text" placeholder="Carga" />
        <Input name="repetitions" type="text" placeholder="Repetições" />

        <Button type="submit" onClick={() => { }}>
          Cadastrar
        </Button>
      </Form>
    ))
  );
}

export default ExerciseForm;
