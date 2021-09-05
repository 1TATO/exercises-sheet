import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import BackgroundImg from '../../assets/homeBackground.svg';
import { Container, Content } from './styles';

function Home() {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <img src={BackgroundImg} alt="Background" />

          <div>
            <p>Leve sua planilha de exercícios para qualquer lugar</p>

            <div>
              <Link to="/create">
                <button type="button">Criar conta</button>
              </Link>
              <Link to="/login">
                <button type="button">Entrar</button>
              </Link>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Home;
