/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FiEdit, FiTrash2, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Form } from '@unform/web';

import { useExercise } from '../../context/ExercisesContext';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content } from './styles';
import Input from '../../components/Input';

Modal.setAppElement('#root');

function Dashboard() {
  const {
    exercises, createExercise, updateExercise, deleteExercise,
  } = useExercise();

  const [isNewExerciseModalOpen, setIsNewExerciseModalOpen] = useState(false);

  function handleOpenNewExerciseModal() {
    setIsNewExerciseModalOpen(true);
  }

  function handleCloseNewExerciseModal() {
    setIsNewExerciseModalOpen(false);
  }

  async function handleSubmit(data) {
    createExercise(data);

    handleCloseNewExerciseModal();
  }

  return (
    <>
      <Header />

      <Container>
        <Button type="button" onClick={handleOpenNewExerciseModal}>
          Novo exercício
        </Button>

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

          <Form
            onSubmit={handleSubmit}
            initialData={{
              name: exercises.name,
              weight: exercises.weight,
              repetitions: exercises.repetitions,
            }}
          >
            <h2 className="react-modal-title">Novo exercício</h2>

            <Input name="name" type="text" placeholder="Nome" />
            <Input name="weight" type="text" placeholder="Carga" />
            <Input name="repetitions" type="text" placeholder="Repetições" />

            <Button type="submit">
              Cadastrar
            </Button>
          </Form>
        </Modal>

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
                      <FiEdit onClick={() => updateExercise(exercise.id)} />
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
