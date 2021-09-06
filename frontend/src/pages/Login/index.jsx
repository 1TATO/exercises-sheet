import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content } from './styles';

function SignIn() {
  const formRef = useRef(null);

  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      history.push('/dashboard');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <Button type="submit">
              Entrar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default SignIn;
