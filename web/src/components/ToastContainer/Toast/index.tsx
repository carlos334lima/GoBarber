/* eslint-disable */

import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';
import { Container } from './style';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000);

    return () => {
      clearTimeout(timer)
    }

  },[])

  return (
    <Container type={message.type} hasDescription={!!message.description}>
     {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>Não foi possível fazer login</p>}
      </div>

      <button onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
