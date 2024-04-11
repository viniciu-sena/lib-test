import React from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  buttonType?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.buttonType === 'primary' ? '#fff' : '#363636')};
  background-color: ${(props) =>
    props.buttonType === 'primary' ? '#FF5655' : '#f6f6f6'};
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
        ? '9px 30px 11px'
        : '14px 30px 16px'};
`;

function Button({ size, buttonType, text, onClick, ...props }: ButtonProps) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      buttonType={buttonType}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
