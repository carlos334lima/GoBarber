/* eslint-disable */
import React, { useRef, useCallback } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/logo.svg';
import getValidationErros from '../../utils/getValidationError';

/*
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
 */

import { Container, Content, Background, AnimationContainer } from './styles';



const SignIn: React.FC = () => {

  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      FormRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail Obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required( 'Senha Obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const erros = getValidationErros(err);

      FormRef.current?.setErrors(erros);
    }
  }, []);

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
