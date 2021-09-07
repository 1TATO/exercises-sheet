import { useState } from 'react';
import { FiEdit, FiTrash2, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content } from './styles';
import Input from '../../components/Input';

Modal.setAppElement('#root');

function Dashboard() {
  const [isNewExerciseModalOpen, setIsNewExerciseModalOpen] = useState(false);

  function handleOpenNewExerciseModal() {
    setIsNewExerciseModalOpen(true);
  }

  function handleCloseNewExerciseModal() {
    setIsNewExerciseModalOpen(false);
  }

  function handleSubmit(data) {
    // e.preventDefault();
    console.log(data);
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

          <Form onSubmit={handleSubmit} initialData={{}}>
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
              <tr>
                <td>Biceps alternado</td>
                <td>20</td>
                <td>4X15</td>
                <td className="action">
                  <FiEdit />
                </td>
                <td className="action">
                  <FiTrash2 />
                </td>
              </tr>
              <tr>
                <td>Supino</td>
                <td>20</td>
                <td>4X15</td>
                <td className="action">
                  <FiEdit />
                </td>
                <td className="action">
                  <FiTrash2 />
                </td>
              </tr>
              <tr>
                <td>Supino</td>
                <td>20</td>
                <td>4X15</td>
                <td className="action">
                  <FiEdit />
                </td>
                <td className="action">
                  <FiTrash2 />
                </td>
              </tr>

            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
}

export default Dashboard;
