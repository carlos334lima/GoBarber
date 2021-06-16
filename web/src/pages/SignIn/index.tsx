/* eslint-disable */
import React, { useRef, useCallback, useContext } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, Content, Background, AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/logo.svg';
import getValidationErros from '../../utils/getValidationError';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

/*
import { Link, useHistory } from 'react-router-dom';


import { useToast } from '../../hooks/toast';
 */

interface SignFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { SignIn } = useAuth();
  const { addToast } = useToast();

  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignFormData) => {
      try {
        FormRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await SignIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErros(err);

          FormRef.current?.setErrors(erros);
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um error'
        });
      }
    },
    [SignIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="Gobarber" />

          <Form ref={FormRef} onSubmit={handleSubmit}>
            <h1>Faça seu Login</h1>

            <Input
              name="email"
              type="text"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="">Esqueci Minha Senha</a>
          </Form>

          <a href="">
            <FiLogIn />
            Criar Conta
          </a>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
