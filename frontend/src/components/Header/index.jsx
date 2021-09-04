import LogoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Exercises" />

        <nav>
          <a href="google.com">Criar conta</a>
          <a href="google.com">Entrar</a>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
