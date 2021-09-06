import { FiEdit, FiTrash2 } from 'react-icons/fi';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content } from './styles';

function Dashboard() {
  return (
    <>
      <Header />

      <Container>
        <Button>Novo exercício</Button>

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
