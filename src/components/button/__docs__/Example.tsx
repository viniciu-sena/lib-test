import React from 'react';
import Button, { ButtonProps } from '../Button';

function Example({
  onClick = () => {},
  buttonType = 'primary',
  size = 'small',
  text = 'Button',
  ...props
}: ButtonProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button
        size={size}
        text={text}
        onClick={onClick}
        buttonType={buttonType}
        {...props}
      />
    </div>
  );
}

export default Example;
