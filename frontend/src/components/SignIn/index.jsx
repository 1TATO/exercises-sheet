import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../Button';
import Input from '../Input';

import { Container, Content } from './styles';

function SignIn() {
  const formRef = useRef(null);

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
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
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
