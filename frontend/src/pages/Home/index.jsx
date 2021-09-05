import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';

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
                <Button type="button">Criar conta</Button>
              </Link>
              <Link to="/login">
                <Button type="button">Entrar</Button>
              </Link>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Home;
