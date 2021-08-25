import React from 'react';
import './Button.css';

//For Style
const STYLES = ['btn--primary', 'btn--outline'];
//For Size
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
//For Color
const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick} type={type}>
         {children}
    </button>
  );
};