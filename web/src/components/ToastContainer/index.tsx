/* eslint-disable */
import React from 'react';

import { Container, Toast } from './styles';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="error" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
