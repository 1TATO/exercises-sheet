import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { useExercise } from '../../context/ExercisesContext';
import { useModal } from '../../context/ModalContext';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content } from './styles';

function Dashboard() {
  const { exercises, deleteExercise } = useExercise();
  const { handleOpenNewExerciseModal, handleUpdate } = useModal();

  return (
    <>
      <Header />

      <Container>
        <Button type="button" onClick={handleOpenNewExerciseModal}>
          Novo exercício
        </Button>

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
                    <button type="button">
                      <FiEdit onClick={() => handleUpdate(exercise)} />
                      {/* <FiEdit onClick={handleOpenNewExerciseModal} /> */}
                    </button>
                  </td>
                  <td className="action">
                    <button type="button">
                      <FiTrash2 onClick={() => deleteExercise(exercise.id)} />
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
