/* eslint-disable */

import styled, { css } from "styled-components";

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}


const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 360px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  ${props => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 16px;
  }
  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    background: transparent;
    border: 0;
    color: inherit;
  }

  ${props => !props.hasDescription && css`
      align-items: center;

      svg{
        margin-top: 0;
      }
  `}
`;
