import {
    type FormEvent,
    type ComponentPropsWithoutRef,
    useRef,
    useImperativeHandle,
    forwardRef,
  } from 'react';
  
  type FormProps = {
    onSave: (value: unknown) => void;
  } & ComponentPropsWithoutRef<'form'>;
  
  export type FormBehaviour = {
    clear: () => void;
  };
  
  const Form = forwardRef<FormBehaviour, FormProps>(function Form(
    { onSave, children, ...props },
    ref
  ) {
    const form = useRef<HTMLFormElement>(null);
  
    useImperativeHandle(ref, () => {
      return {
        clear() {
          form.current?.reset();
        },
      };
    });
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };
  
    return (
      <form onSubmit={handleSubmit} {...props} ref={form}>
        {children}
      </form>
    );
  });
  
  export default Form;