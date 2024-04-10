import { default as React, MouseEventHandler } from '../../../node_modules/react';

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
