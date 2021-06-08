/* eslint-disable */
import React, { useRef, useCallback } from 'react';

import LogoImg from '../../assets/logo.svg';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';


import Input from '../../components/Input';
import Button from '../../components/Button';

/*
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErros'; */

import { Container, Content, Background, AnimationContainer } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <AnimationContainer>
      <img src={LogoImg} alt="Gobarber" />

        <form>
          <h1>Faça seu Login</h1>

          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="">Esqueci Minha Senha</a>
        </form>

        <a href="">
          <FiLogIn />
          Criar Conta
          </a>
      </AnimationContainer>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
