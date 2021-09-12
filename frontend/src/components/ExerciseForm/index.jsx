import { Form } from '@unform/web';
import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import { useExerciseModal } from '../../context/ExerciseModalContext';

function ExerciseForm({ edit }) {
  const { handleSubmit } = useExerciseModal();

  return (
    (edit ? (
      <Form onSubmit={handleSubmit} initialData={{}}>
        <h2 className="react-modal-title">Editar exercício</h2>

        <Input name="name" type="text" placeholder="Nome" />
        <Input name="weight" type="text" placeholder="Carga" />
        <Input name="repetitions" type="text" placeholder="Repetições" />

        <Button type="submit" onClick={() => { }}>
          Editar
        </Button>
      </Form>
    ) : (
      <Form onSubmit={handleSubmit}>
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

ExerciseForm.propTypes = {
  edit: PropTypes.bool,
};

ExerciseForm.defaultProps = {
  edit: false,
};

export default ExerciseForm;
