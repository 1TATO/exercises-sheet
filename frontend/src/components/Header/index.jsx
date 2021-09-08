import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import LogoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={LogoImg} alt="Exercises" />
        </Link>

        {user ? (
          <p>
            Bem-vindo,
            {' '}
            {user.user.name}
            .
            {' '}
            <Link to="/" onClick={signOut}>Sair</Link>
          </p>
        ) : (
          <nav>
            <Link to="/create">Criar conta</Link>
            <Link to="/login">Entrar</Link>
          </nav>
        )}
      </Content>
    </Container>
  );
}

export default Header;
