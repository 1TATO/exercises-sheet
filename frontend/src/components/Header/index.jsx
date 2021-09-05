import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Exercises" />

        <nav>
          <Link to="/create">Criar conta</Link>
          <Link to="/login">Entrar</Link>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
