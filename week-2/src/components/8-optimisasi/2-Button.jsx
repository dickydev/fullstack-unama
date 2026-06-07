import { memo } from 'react';

const Button = memo(({ onClick }) => {
  return <button onClick={onClick}>Load Button</button>;
});

export default Button;
