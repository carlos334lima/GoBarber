/* eslint-disable */
import React from 'react';

import Toast from './Toast';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
