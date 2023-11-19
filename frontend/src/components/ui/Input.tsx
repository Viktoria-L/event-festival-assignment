import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  labelText: string;
  inputId: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { labelText, inputId, ...props },
  ref
) {
  return (
    <div className='form-control'>
      <label htmlFor={inputId}>{labelText}</label>
      <input id={inputId} name={inputId} {...props} ref={ref} />
    </div>
  );
});

export default Input;