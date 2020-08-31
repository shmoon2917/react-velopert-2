import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function ButtonWithScss({
  children,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

ButtonWithScss.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default ButtonWithScss;
