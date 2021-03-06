import { FiEdit, FiTrash2 } from 'react-icons/fi';

import Header from '../../components/Header';
import Button from '../../components/Button';
import ExerciseModal from '../../components/ExerciseModal';

import { useExerciseModal } from '../../context/ExerciseModalContext';
import { useExerciseForm } from '../../context/ExerciseFormContext';

import { Container, Content } from './styles';

function Dashboard() {
  const { handleOpenNewExerciseModal } = useExerciseModal();
  const {
    exercises,
    handleEditExercise,
    handleDeleteExercise,
    setIsEditingExercise,
  } = useExerciseForm();

  function handleCreate() {
    setIsEditingExercise(false);
    handleOpenNewExerciseModal();
  }

  function handleEdit(exercise) {
    setIsEditingExercise(true);
    handleEditExercise(exercise);
  }

  return (
    <>
      <Header />

      <Container>
        <Button type="button" onClick={handleCreate}>
          Novo exercício
        </Button>

        <ExerciseModal />

        <Content>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Carga</th>
                <th>Repetições</th>
                <th className="action">Editar</th>
                <th className="action">Excluir</th>
              </tr>
            </thead>

            <tbody>
              {exercises.map((exercise) => (
                <tr key={exercise.id}>
                  <td>{exercise.name}</td>
                  <td>{exercise.weight}</td>
                  <td>{exercise.repetitions}</td>
                  <td className="action">
                    <button type="button" onClick={() => handleEdit(exercise)}>
                      <FiEdit />
                    </button>
                  </td>
                  <td className="action">
                    <button type="button" onClick={() => handleDeleteExercise(exercise.id)}>
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
}

export default Dashboard;
