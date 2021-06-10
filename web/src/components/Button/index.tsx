/* eslint-disable */

import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLInputElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container>{children}</Container>;
};

export default Button;
