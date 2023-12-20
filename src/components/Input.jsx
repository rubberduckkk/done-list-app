import { forwardRef } from 'react';

const Input = forwardRef(({ label, type, name }, ref) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} ref={ref}/>
    </>
  );
});

export default Input;